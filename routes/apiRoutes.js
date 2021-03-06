require("dotenv").config();
const axios = require("axios");
const db = require("../models");

module.exports = function(app) {
    app.get("/api/books", (req, res) => {
        db.Book.find().then(
            (books) => {
                res.json(books);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    });

    app.post("/books", (req, res) => {
        // set bookTitle to the req.body.title with spaces replaced with plus signs(+)
        let bookTitle = req.body.title.replace(/\s/g, "+");
        const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
        const APIKEY = "&key=AIzaSyDFpd-2EoMstvbarr8ywlER8dEv2nzfQhY";


        console.log("------------look at me----------------------", bookTitle);

        axios.get(
            BASEURL + bookTitle + APIKEY
        ).then(
            (response) => {
                res.json(response.data.items)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    });

    app.post("/api/books", (req, res) => {
        db.Book.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    });

    app.delete("/api/books/:id", (req, res) => {
        db.Book.deleteOne({_id: req.params.id}).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    });

}
