const { response } = require('express');
const express = require('express');
const { deleteOne } = require('../model/product');
const router = express.Router();
const Product = require('../model/product')


router.get('/' , async (req ,res) => {
    
    try{
     const response = await Product.find();
     // console.log(response);
     res.status(200).json(response);

    }
    catch(err) {
        console.log("error -------> " , err)
    }

})

router.get('/:id' , async (req ,res) => {
    
    try{
    const tempId = req.params.id;
     const response = await Product.findOne({'id':tempId});
     // console.log(response);
     res.status(200).json(response);

    }
    catch(err) {

        console.log("error -------> " , err)
        res.status(400).json(response)
    }

})


router.delete('/:id' , async(req , res)=> {

    try{
        const tempid = req.params.id;
        const response = await Product.deleteOne({'id' : tempid});
       // console.log(response);
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(400).json(response);
    }
})


router.put('/' , async (req , res)=> {

    try {
       // console.log(req.body);
        const tempid = req.body.id;
        const response = await Product.findOneAndUpdate({'id': tempid} , req.body , {new : true});
        res.status(200).json(response);
        
    } catch (error) {
        console.log(err);
        res.status(400).json();
    }
})


router.post('/' , async (req , res)=>{
        try {
         //   console.log(req.body);

            const tempobj = new Product ({
            id: req.body.id,
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category
            
            })
            const response = await tempobj.save();
            // console.log(response);
            res.status(201).json(response)
          //  res.send('api sucess...')
        } catch (error) {
            console.log(error)
            res.status(400).json({massage : error.massage});
            //res.send("api failed.....")
        }
})

module.exports = router;
