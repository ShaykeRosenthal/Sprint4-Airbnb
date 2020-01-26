const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {addHouse, getHouses, deleteHouse,getHouse} = require('./house.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getHouses)
router.get('/:id', getHouse)
router.post('/',  requireAuth, addHouse)
router.delete('/:id',  requireAuth, deleteHouse)

module.exports = router