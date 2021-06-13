const Businesses = require("../database/models/Businesses");

module.exports = (req, res) => {
    const{
        image
    } = req.files
    
    Businesses.create({
        ...req.body,
        image: `/businesses/${image.name}`
    }, (error, post) => {
        res.redirect("/businesses/new");
    });
}