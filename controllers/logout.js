module.exports = (req, res) => {
    req.sesion.destroy();
    res.redirect("/");
    /*
    req.session.destroy(() => {
        res.redirect("/")
    })*/
}