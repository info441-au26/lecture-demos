import {promises as fs} from 'fs'
import express from 'express'
var router = express.Router()

// Takes status as a query param.
// Query parameter: /getPterosaurs?status=value&year=xxxx
// Path parameter: /getPterosaurs/:status
router.get("/getPterosaurs/:status", async (req, res) => {
    const data = await fs.readFile('data/pterosaur.json')
    let pterosaurInfo = JSON.parse(data)

    const status = req.params.status;
    
    // filter out any without images
    let filteredPterosaurInfo = pterosaurInfo
        .filter(onePterosaur => onePterosaur.img != "")

    if (status) {
        filteredPterosaurInfo = filteredPterosaurInfo
            .filter(onePterosaur => onePterosaur.Status == status)
    }

    console.log(filteredPterosaurInfo)
    res.json(filteredPterosaurInfo)
})

export default router