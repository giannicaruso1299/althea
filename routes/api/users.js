const express = require('express');
const router = express.Router();
const Token = require('../../models/Token');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');
const User = require('../../models/user');

router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    let user = new User({
        nomeUtente: req.body.nomeUtente,
        password: hashPassword
    });

    try {
        await user.save()
            .then(async usr => {
                let token = new Token({
                    _userId: usr._id,
                    token: crypto.randomBytes(16).toString('hex')
                });
                await token.save();
                res.status(200).send(user);
            })
    } catch (err) {
        console.log(err);
    }
});

router.post('/login', async (req, res) => {
    await User.findOne({nomeUtente: req.body.nomeUtente})
        .then(async usr => {
            const validPass = await bcrypt.compare(req.body.password, usr.password);
            if (!validPass) {
                return res.status(400).send('Invalid password');
            }
            const token = jwt.sign({_id: usr._id}, process.env.TOKEN_SECRET);
            res.header('auth-token', token).send(token);
        })
        .catch(() => {
            res.status(400).send('Utente non trovato');
        })
})

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