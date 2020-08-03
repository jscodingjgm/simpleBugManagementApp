const express = require('express');
const router = express.Router();
const fs = require('fs');

const bugDetailsModel = require('../db-util/model');

router.get('/createDefect', (req, res) => {
    res.render('capture');
});

router.post('/saveBug', (req, res) => {
    const bugDetailsDoc = new bugDetailsModel({
        title : req.body.ftitle,
        description: req.body.fdesc,
        assignedTo : req.body.fassignee,
        time : new Date(),
        date : new Date()
    });

    bugDetailsDoc.save((err, doc) => {
        if(err) return console.log(err);

        console.log(doc);
        isSaved = true;
        res.redirect('/createDefect');
    });
});

router.get('/admin', (req, res) => {
    bugDetailsModel.find((err, doc) => {
        res.render('admin/dashboard', {
            issueDetails : doc
        });
    });
});

module.exports = router;