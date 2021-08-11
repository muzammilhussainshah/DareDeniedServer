const express = require('express')
const router = express.Router()
const AddData = require('../modals/authusers')

router.post("/", async (req, res) => {
    const { phoneNumber, displayName, email, photoURL, uid } = req.body.userInfo; 
     
    try {
        const dataAddSchema = new AddData(
            {
                email: email,
                Name: displayName,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
            }
        );

        let result = await dataAddSchema.save();
        
        res.status(200).json({ data: result, message: 'SIGN UP USER SUCCESSFULLY' });
    }
    catch (err) {
        res.status(400).json({ message: err })
    }
});

module.exports = router



