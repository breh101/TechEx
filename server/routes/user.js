const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const userRoutes = express.Router();

// This will help us connect to the database
const {getDb, connectToServer} = require("../db/conn");
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
userRoutes.route("/users").get(function (req, res) {
    let db_connect = dbo.getDb("main");
    db_connect
        .collection("users")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you get a single record by id
userRoutes.route("/user/:id").get(function (req, res) {
    let db_connect = getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("users")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new record.
userRoutes.route("/user/add").post(function (req, response) {
    let db_connect = getDb();
    let myobj = {
        name: req.body.name,
        rank: req.body.rank,
    };
    db_connect.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

// This section will help you update a record by id.
userRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        },
    };
    db_connect
        .collection("users")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});

// This section will help you delete a record
userRoutes.route("delete/:id").delete((req, response) => {
    connectToServer();
    let db_connect = getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("users").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = userRoutes;