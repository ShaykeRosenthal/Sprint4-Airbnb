// const logger = require('../../services/logger.service')
const orderService = require('./order.service')

// TODO: needs error handling! try, catch

async function getOrders(req, res) {
    try {
        const orders = await orderService.query(req.query)
        res.send(orders)
    } catch (err) {
        // logger.error('Cannot get orders', err);
        console.log('Cannot get orders', err);
        res.status(500).send({ error: 'cannot get orders' })

    }
}

async function deleteOrder(req, res) {
    try {
        await orderService.remove(req.params.id)
        res.end()
    } catch (err) {
        console.log('order.controller,deleteOrder,err', err)
        throw err
    }
}

async function addOrder(req, res) {
    try {
        var order = req.body;
        // order.byUserId = req.session.user._id;
        order = await orderService.add(order)
        // order.byUser = req.session.user;
        // TODO - need to find aboutUser
        // order.aboutUser = {} 
        res.send(order)
    } catch (err) {
        console.log('order.controller,addOrde,err', err)
        throw err
    }
}

module.exports = {
    getOrders,
    deleteOrder,
    addOrder
}