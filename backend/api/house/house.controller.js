// const logger = require('../../services/logger.service')
const houseService = require('./house.service')
const ObjectId = require('mongodb').ObjectId
 
// TODO: needs error handling! try, catch

async function getHouses(req, res) {
    try {
        const houses = await houseService.query(req.query)
        res.send(houses)
    } catch (err) {
        // logger.error('Cannot get houses', err);
        console.log('Cannot get houses', err);
        res.status(500).send({ error: 'cannot get houses' })
        
    }
}
async function getHouse(req,res){
    try {
        const house = await houseService.query({"_id":ObjectId(req.params.id)})
        res.send(house)
    } catch (err) {
        // logger.error('Cannot get houses', err);
        console.log('Cannot get houses', err);
        res.status(500).send({ error: 'cannot get house' })
        
    }
}
async function deleteHouse(req, res) {
    await houseService.remove(req.params.id)
    res.end()
}

async function addHouse(req, res) {
    var house = req.body;
    // house.byUserId = req.session.user._id;
    house = await houseService.add(house)
    // house.byUser = req.session.user;
    // TODO - need to find aboutUser
    // house.aboutUser = {} 
    res.send(house)
}

module.exports = {
    getHouses,
    deleteHouse,
    addHouse,
    getHouse
}