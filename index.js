const expressEdge = require("express-edge");
const express = require("express");
const edge = require("edge.js");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");

const createPostController = require("./controllers/createPost");
const homePageController = require("./controllers/homePage");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const createUserController = require("./controllers/createUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");
const logoutController = require("./controllers/logout");

const connectFlash = require("connect-flash");

const app = new express();

mongoose.connect("mongodb://localhost:27017/blog", {useNewUrlParser: true})
    .then(() => "You are now connected to Mongo")
    .catch(err => console.error("Something went wrong", err));

app.use(expressSession({
    secret: "secret", resave: false,
    saveUninitialized: false,
    store: connectMongo.create({
        mongoUrl: "mongodb://localhost:27017/blog"
    })
}))

/*
app.use(expressSession({
    store: mongoStore.create({ mongoUrl: "mongodb://localhost:27017/blog"})
}));
*/
/*
app.use(expressSession({
    secret: "secret",
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));
*/

app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge.engine);
app.set("views", __dirname + "/views");

app.use("*", (req, res, next) => {
    edge.global("auth", req.session.userId)
    next()
});

app.use(connectFlash());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storePost = require("./middleware/storePost");
const auth = require("./middleware/auth");
const redirectIfAuthenticated = require("./middleware/redirectIfAuthenticated");

app.use("/posts/store", storePost);

app.get("/", homePageController);
app.get("/post/:id", getPostController);
app.get("/posts/new", auth, createPostController);
app.get("/posts/new", createPostController);
app.post("/posts/store", storePostController);
app.get("/auth/login", redirectIfAuthenticated, loginController);
app.post("/user/login", redirectIfAuthenticated, loginUserController);
app.get("/auth/register", redirectIfAuthenticated, createUserController);
app.get("/auth/logout", redirectIfAuthenticated, logoutController);
app.post("/users/register", redirectIfAuthenticated, storeUserController);

app.listen(4000, () => {
    console.log("App listening on port 4000")
})