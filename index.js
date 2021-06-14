const expressEdge = require("express-edge");
const express = require("express");
const edge = require("edge.js");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");

var db = require("./config/keys").MongoURI;

const createPostController = require("./controllers/createPost");
const homePageController = require("./controllers/homePage");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const createUserController = require("./controllers/createUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");
const logoutController = require("./controllers/logout");
const storeBusinessesController = require("./controllers/storeBusinesses");
const createBusinessesController = require("./controllers/createBusinesses");

const connectFlash = require("connect-flash");

const app = new express();

/*
mongoose.connect("mongodb://localhost:27017/blog", {useNewUrlParser: true})
    .then(() => "You are now connected to Mongo")
    .catch(err => console.error("Something went wrong", err));
*/

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

/*
app.use(expressSession({
    secret: "secret", resave: false,
    saveUninitialized: false,
    store: connectMongo.create({
        mongoUrl: "mongodb://localhost:27017/blog"
    })
}))
*/

app.use(expressSession({
    secret: "secret", resave: false,
    saveUninitialized: false,
    store: connectMongo.create({
        mongoUrl: db
    })
}))

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

app.get("/blog", homePageController);
app.get("/post/:id", getPostController);
app.get("/posts/new", auth, createPostController);
app.post("/posts/store", storePostController);
app.get("/auth/login", redirectIfAuthenticated, loginController);
app.post("/users/login", redirectIfAuthenticated, loginUserController);
app.get("/auth/register", redirectIfAuthenticated, createUserController);
app.get("/auth/logout", redirectIfAuthenticated, logoutController);
app.post("/users/register", redirectIfAuthenticated, storeUserController);
app.get("/businesses/new", auth, createBusinessesController);
app.post("/businesses/store", redirectIfAuthenticated, storeBusinessesController);

//static

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/services", (req, res) => {
    res.render("services")
});

app.get("/posts", (req, res) => {
    res.render("blog");
});

app.get("/about", (req, res) =>{
    res.render("about");
});

app.get("/paintManagement", (req, res) => {
    res.render("paintManagement");
});

app.get("/paint", (req, res) => {
    res.render("paint")
});

app.get("/design", (req, res) => {
    res.render("design")
});

app.get("/performance", (req, res) => {
    res.render("performance")
});

app.get("/fitment", (req, res) => {
    res.render("fitment")
});

app.get("/others", (req, res) => {
    res.render("others")
});

let port = process.env.PORT;
if(port === null || port ===""){
    port = 8000
};

app.listen(port);