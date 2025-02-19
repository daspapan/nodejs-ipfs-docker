import express from 'express';
import createHttpError from 'http-errors';
// const { create } = require('kubo-rpc-client');
import { create } from 'kubo-rpc-client'


module.exports = {

    web3StorageUpload : async function(req, res) {
        const { name, description } = req.body;
        const { image } = req?.files ?? {};
        console.log(`Uploading image: [${name}] to ipfs.`);

        try {

            if (!image && !name && !description || name === undefined) {
                return res.status(400).json({ 
                    success: false,
                    errorMessage: 'invalid input' 
                });
            }

            /* const imageName = `${new Date().getTime()}_${image.name.replaceAll(' ', '')}`;
            const file = await fileFromPath(image, imageName);
            const imageCid = await storeFiles(file);
            const files = await makeFileObjects(name, description, `https://${imageCid}.ipfs.w3s.link/${imageName}`);
            const metaDataCid = await storeFiles(files);
            await fs.promises.unlink(image.tempFilePath);
            const metadataUrl = `https://${metaDataCid}.ipfs.w3s.link/metadata.json`; */

            /* const ipfs = create('/ip4/0.0.0.0/tcp/8080');
            const buffer = randomBytes(812);
            console.log(`adding ${buffer.length} random bytes`);
            const result = await ipfs.add(buffer);
            const { cid } = result;
            console.log(`added ${cid.toString()}`); */
            
            return res.status(200).json({
                success: true,
                message: "Successful",
                data: []
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false,
                errorMessage: error.message
            })
        }
    }
}