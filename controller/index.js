// var mysql = require('../node_modules/mysql');

// var express = require('express');

// var sql = require('../model/sql.js');  

module.exports = {
    uget	: require("./uget.js"),
    upost	: require("./upost.js"),
    uput	: require("./uput.js"),
    udelete	: require("./udelete.js"),
    uActive	: require("./uActive.js"),
    fileSys : require("./fileSys.js"),
    promise : require("./promiseEg.js")
}
