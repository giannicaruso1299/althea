const express = require('express');
const router = express.Router();

const User = require('../../models/user');

// @route   GET api/users
// @desc    Get All Users
// @access  Public 
router.get('/',(req,res) => {
    User.find()
        .then(items => {
            if(items.length == 0) {
                console.log("No users in database");
            }
            res.json(items);
            console.log("Users in db: ");
            items.forEach(item => {
                console.log(item.nomeUtente);
            });
        });
});

// @route   POST api/users
// @desc    Create A User
// @access  Public 
router.post('/',(req,res) => {
    const newUser = new User({
        nomeUtente:req.body.nomeUtente,
        password: req.body.password
    });
    newUser.save()
        .then(item => {
            res.json(item);
            console.log(`Added user to database: ${item.nomeUtente}`);
        })
        .catch(err=>{
            res.json(err);
            console.log("Impossibile aggiungere utente al DB")
        });
});

// @route   POST api/users
// @desc    Find A User
// @access  Public 
router.post('/findUser',(req,res) => {
    User.find({$and: [{nomeUtente:req.body.nomeUtente}, {password: req.body.password}]})
        .then(items => {
            if(items.length == 0) {
                console.log("No users in database");
            }

            res.send(items);
            console.log("Utente trovato: ");
            items.forEach(item => {
                console.log(item.nomeUtente);
            })
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;