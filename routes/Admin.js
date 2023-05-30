const express = require('express');
const adminData = require('../models/Adminmodel')

const router = express.Router();
const mongoose = require("mongoose")

const app = express();
//Admin signup

router.post('/signupAdmin', (req, res, next) => {
    console.log("User ")
    const adminSignup = new adminData({
        _id: new mongoose.Types.ObjectId,

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,

    });


    var mobileNo = req.body.mobileNo;
    //first check if user is alredy existed 
    adminData.findOne({ mobileNo: mobileNo }).select().exec().then(doc => {
        console.log(doc)
        if (doc == null) { //if no user found then create new user
            adminSignup.save().then(result => {
                // sendnotificationforplacebid(req.body.firstName + req.body.lastName,"You Registered As",req.body.role,req.body.uniqueDeviceId)
                res.status(200).json({
                    message: "Admin signed up susccessfully",
                    status: "success",
                    Id: result._id,
                    selectType: result.role
                });

            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err,
                    status: "failed"
                });
            })

        } else {
            res.status(500).json({
                message: "user aleredy exists",
                status: "failed"

            })
        }


    });


});

router.post('/loginAdmin', async (req, res) => {
    adminData.find({ email: req.body.email, password: req.body.password }).select().exec().then(
        doc => {

            if (doc.length) {
                console.log(doc)
                res.status(200).json({
                    message:"Login Successfull",
                    data: doc
                })
            } else {
                res.status(200).json({
                    message: "No Matching data found",
                    status: "failed",

                })

            }
        }
    ).catch(err => {
        res.status.json({

            error: err
        })
    })
});

module.exports = router;