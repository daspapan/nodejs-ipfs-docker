var express = require('express');
var fileUpload = require('express-fileupload');
var router = express.Router();
router.use(fileUpload({useTempFiles: true}))

/* GET users listing. */
router.get('/ping', function(req, res, next) {
    res.send('IPFS ping response');
});

var ipfsUploadHandler = require('../api/v1/ipfs/post')
router.post('/upload', ipfsUploadHandler.web3StorageUpload)

module.exports = router;
