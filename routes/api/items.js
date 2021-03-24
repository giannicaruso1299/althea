const express = require('express');
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const verify = require('./verifyToken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Item = require('../../models/item');
const fs = require('fs');

function formatted_date() {
    let result="";
    let d = new Date();
    result+=d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear()+"_" +d.getHours()+"-"+d.getMinutes()+"-"+d.getSeconds();
    return result;
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,'./uploads/');
    },

    filename: function(req, file, cb) {
        cb(null, formatted_date() + "_" +  file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    //reject a file
    if(file.mimetype !== 'image/jpeg' || file.mimetype !== 'image/png' || file.mimetype !== 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
     limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// @route   GET api/items
// @desc    Get All Items
// @access  Public 
router.get('/', verify, async (req,res) => {
    Item.find()
        .sort({date:1})
        .then(items => {
            if(items.length === 0) {
                res.status(400).send("Nessun elemento");
            } else {
                res.json(items);
            }
            console.log("Elements in db: ");
            items.forEach(item => {
                console.log(item.name);
            });
        });
});

// @route   GET api/items/:event
// @desc    Get All Items Of A Specified Event
// @access  Public 
router.get('/:event',(req,res) => {
    Item.find({$and: [{category:"Eventi"},{$or: [{event:req.params.event},{event:capitalize(req.params.event)}]}]})
        .then(items => {
            if(items.length === 0) {
                res.status(400).send("Nessun elemento");
            } else {
                res.json(items);
            }
            console.log("Elements in db: ");
            items.forEach(item => {
                console.log(item.name);
            });
        });
});

router.get('/findItem/:id', verify,(req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            res.status(200).send(item);
        })
        .catch(err => {
            res.status(400).send(err);
        })
})

router.post('/updatetext', verify, async (req, res) => {
    await Item.findOne({_id: req.body.id})
        .then(async item => {
            await Item.updateOne({_id: req.body.id}, {$set: {
                name: req.body.name || item.name,
                    colore : req.body.colore || item.colore,
                    event : req.body.event || item.event,
                    conf_event : req.body.conf_event || item.conf_event,
                    description : req.body.description || item.description,
            }})
                .then(result => {
                res.status(200).send(result);
            })
                .catch(err => {
                    res.status(400).send(err);
                })
        })
        .catch(err => {
            res.status(400).send(err);
        })
})

router.post('/update', verify, upload.single('productImage'), async (req, res) => {
    let fileNameUpdate = req.file.filename;
    let inputFile = req.file.path;
    let filename = inputFile.slice(inputFile.indexOf('/') + 1,);
    let outputName = '(lg)' + fileNameUpdate;
    let outputSmName = '(sm)' + fileNameUpdate;
    let path = inputFile.slice(0, inputFile.indexOf('/') + 1);
    let outputFile = path + outputName;
    let outputFileSm = path +  outputSmName;
    sharp(inputFile).resize(250, 330, {fit: "fill"}).toFile(outputFile).then(file => console.log("Fatto"));
    sharp(inputFile).resize(160, 250, {fit: "fill"}).toFile(outputFileSm).then(file => console.log(file));
    upload.array([outputFile, outputFileSm]);
    await Item.findOne({_id: req.body.id})
        .then(async item => {
            fs.unlink(item.productImage, (err) => {
                if (err) {
                    res.status(400).send(err);
                }
            })
            fs.unlink(item.productImageSm, (err) => {
                if (err) {
                    res.status(400).send(err);
                }
            })
            console.log(item.productImage)
            await Item.updateOne({_id: req.body.id},{$set: {
                    name: req.body.name || item.name,
                    colore : req.body.colore || item.colore,
                    event : req.body.event || item.event,
                    conf_event : req.body.conf_event || item.conf_event,
                    description : req.body.description || item.description,
                    productImage: outputFile || item.productImage,
                    productImageSm: outputFileSm || item.productImageSm
                }})
                .then(async result => {
                    await fs.unlink(req.file.path, function (err) {
                        if (err) {
                            return err
                        }
                        res.status(200).send(result);
                        res.status(200).send(result);
                    })
                }).catch(err => {
                    res.status(400).send(err);
                })
        })
        .catch(err => {
            res.status(400).send(err);
        })
})

router.get('/confetti/:colore',(req,res) => {
    Item.find({$and: [{category:"Confetti"},{$or: [{colore:req.params.colore},{colore:capitalize(req.params.colore)}]}]})
        .then(items => {
            if(items.length === 0) {
                res.status(400).send("Nessun elemento");
            } else {
                res.json(items);
            }
            console.log(`${req.params.event}: elements in db:`);
            items.forEach(item => {
                console.log(item.name);
            });
        });
});

router.get('/confettate/:event',(req,res) => {
    Item.find({$and: [{category:"Confettate"},{$or: [{conf_event:req.params.event},{conf_event:capitalize(req.params.event)}]}]})
        .then(items => {
            if(items.length === 0) {
                res.status(400).send("Nessun elemento");
            } else {
                res.json(items);
            }
            console.log(`${req.params.event}: elements in db:`);
            items.forEach(item => {
                console.log(item.name);
            });
        });
})

router.get('/portaciuccio', (req, res) => {
    Item.find({category:"Portaciuccio"})
        .then(items => {
            if (items.length === 0) {
                res.status(400).send("Nessun elemento");
            } else {
                res.json(items);
            }
            console.log(`Portaciuccio: elements in db:`);
            items.forEach(item => {
                console.log(item.name);
            });
        })
})

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/',verify, upload.single('productImage'), async (req,res) => {
    let fileName = req.file.filename;
    let inputFile = req.file.path;
    console.log(fileName);
    let filename = inputFile.slice(inputFile.indexOf('/') + 1,);
    let outputName = '(lg)' + fileName;
    let outputSmName = '(sm)' + fileName;
    let path = inputFile.slice(0, inputFile.indexOf('/') + 1);
    let outputFile = path + outputName;
    let outputFileSm = path +  outputSmName;
    const output = sharp(inputFile).resize(250, 330, {fit: "fill"}).toFile(outputFile).then(file => console.log("Fatto"));
    const outputSm = sharp(inputFile).resize(160, 250, {fit: "fill"}).toFile(outputFileSm).then(file => console.log(file));
    upload.array([outputFile, outputFileSm]);
    const newItem = new Item({
        name: req.body.name,
        category: req.body.category,
        event: req.body.event || '',
        colore: req.body.colore || '',
        conf_event: req.body.conf_event || '',
        description: req.body.description,
        productImage: outputFile,
        productImageSm: outputFileSm
    });
    await newItem.save().then(async item => {
        await fs.unlink(req.file.path, function(err) {
            if(err) {
                return err
            }
            res.status(200).send(item);
        })
    }).catch(err => {
        res.status(400).send(err);
    })
});

// @route   DELETE api/items
// @desc    Delete An Item
// @access  Public 
router.delete('/:id', verify,(req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => {
            fs.unlink(item.productImage, (err) => {
                if (err) {
                    throw err;
                }
            });
            fs.unlink(item.productImageSm, (err) => {
                if (err) {
                    throw err;
                }
            });
            res.json({success: true});
            console.log("Element successfully deleted from database!");
        }))
        .catch(err => {
            res.status(400).send(err);
            console.log("Error, element not deleted");
        });
});

router.delete('/',(req,res) => {
    Item.deleteMany().then(() => {
        res.status(200).send("Ok");
    }).catch(err => {
        res.status(400).send(err);
    })
})

module.exports = router;