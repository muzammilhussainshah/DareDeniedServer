const express = require('express')
const router = express.Router();
//adimin

router.use('/AddData', require('./AddGoogleData')) 


module.exports = router