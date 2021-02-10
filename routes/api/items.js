const express = require('express');
const router = express.Router();
const multer = require('multer');

function formatted_date() {
    var result="";
    var d = new Date();
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
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
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


const Item = require('../../models/item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public 
router.get('/',(req,res) => {
    Item.find()
        .sort({date:1})
        .then(items => {
            if(items.length == 0) {
                console.log("No elements in database");
            }
            res.json(items);
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
    Item.find({$or: [{event:req.params.event},{event:capitalize(req.params.event)}]})
        .then(items => {
            if(items.length == 0) {
                console.log(`${req.params.event}: no elements in database`);
            }
            res.json(items);
            console.log(`${req.params.event}: elements in db:`);
            items.forEach(item => {
                console.log(item.name);
            });
        });
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public 
router.post('/',upload.single('productImage'),(req,res) => {
    const newItem = new Item({
        name:req.body.name,
        event:req.body.event,
        description:req.body.description,
        productImage: req.file.path
    });
    if(newItem.productImage === null || newItem.productImage === undefined) {
        newItem.productImage="";
    }
    newItem.save()
        .then(item => {
            res.json(item);
            console.log(`Added element to database: ${item.name}`);
        })
        .catch(err => {
            res.send(err);
        })
    ;
});

// @route   DELETE api/items
// @desc    Delete An Item
// @access  Public 
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => {
            res.json({success: true});
            console.log("Element successfully deleted from database!");
        }))
        .catch(err => {
            res.status(404).json({success:false});
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