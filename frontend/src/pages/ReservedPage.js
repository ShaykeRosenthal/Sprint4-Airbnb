import React, { Component } from 'react';
// import HouseService from '../services/HouseService'
// import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import HouseService from '../services/HouseService'
import HouseList from '../cmps/HouseList'
import NavBar from '../cmps/NavBar';
import OrderService from '../services/OrderService';
import Loading from '../cmps/Loading'

class ResrvedPage extends Component {
    // state = {
    //     houses: [
    //         {
    //             "_id": "5e2eebc51c9d4400006387db",
    //             "title": "house on the lake",
    //             "description": "Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi). Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view. Its the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches. You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums. Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.",
    //             "owner": {
    //                 "_id":  "5e2961ba155477000071afe4",
    //                 "fullName": "Yael Shenker",
    //                 "imgURL": "https://a0.muscache.com/im/pictures/user/e23d9c03-0de7-46f9-ba5a-c62a6358ff34.jpg?aki_policy=profile_x_medium"
    //             },
    //             "address": {
    //                 "country": "spain",
    //                 "coords":{
    //                     "lat": "0",
    //                     "lng": "0"
    //                 }
    //             },
    //             "imgs": ["https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255117/Tutrtle%20house/Bedrooms/apartment-bed-bedroom-chair-271624_mldlej.jpg", "https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255737/Tutrtle%20house/Kitchens/apartment-blinds-cabinets-chairs-349749_gycx19.jpg", "https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255859/Tutrtle%20house/Shower/oval-mirror-near-toilet-bowl-1910472_dognwb.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579558662/white-wooden-shelf-beside-bed-2062431_nrtib1.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579613457/blue-and-gray-concrete-house-with-attic-during-twilight-186077_wx3xq6.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579613562/black-flat-screen-tv-turned-off-210265_alzyj0.jpg"],
    //             "capacity": "2",
    //             "price": "170",
    //             "rating": "4.92",

    //         },
    //         {
    //             "_id": "5e2eebc51c9d4400006387db",
    //             "title": "house on the lake",
    //             "description": "Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi). Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view. Its the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches. You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums. Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.",
    //             "owner": {
    //                 "_id":  "5e2961ba155477000071afe4",
    //                 "fullName": "Yael Shenker",
    //                 "imgURL": "https://a0.muscache.com/im/pictures/user/e23d9c03-0de7-46f9-ba5a-c62a6358ff34.jpg?aki_policy=profile_x_medium"
    //             },
    //             "address": {
    //                 "country": "spain",
    //                 "coords":{
    //                     "lat": "0",
    //                     "lng": "0"
    //                 }
    //             },
    //             "imgs": ["https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255117/Tutrtle%20house/Bedrooms/apartment-bed-bedroom-chair-271624_mldlej.jpg", "https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255737/Tutrtle%20house/Kitchens/apartment-blinds-cabinets-chairs-349749_gycx19.jpg", "https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255859/Tutrtle%20house/Shower/oval-mirror-near-toilet-bowl-1910472_dognwb.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579558662/white-wooden-shelf-beside-bed-2062431_nrtib1.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579613457/blue-and-gray-concrete-house-with-attic-during-twilight-186077_wx3xq6.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579613562/black-flat-screen-tv-turned-off-210265_alzyj0.jpg"],
    //             "capacity": "2",
    //             "price": "170",
    //             "rating": "4.92",

    //         },
    //         {
    //             "_id": "5e2eebc51c9d4400006387db",
    //             "title": "house on the lake",
    //             "description": "Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi). Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view. Its the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches. You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums. Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.",
    //             "owner": {
    //                 "_id":  "5e2961ba155477000071afe4",
    //                 "fullName": "Yael Shenker",
    //                 "imgURL": "https://a0.muscache.com/im/pictures/user/e23d9c03-0de7-46f9-ba5a-c62a6358ff34.jpg?aki_policy=profile_x_medium"
    //             },
    //             "address": {
    //                 "country": "spain",
    //                 "coords":{
    //                     "lat": "0",
    //                     "lng": "0"
    //                 }
    //             },
    //             "imgs": ["https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255117/Tutrtle%20house/Bedrooms/apartment-bed-bedroom-chair-271624_mldlej.jpg", "https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255737/Tutrtle%20house/Kitchens/apartment-blinds-cabinets-chairs-349749_gycx19.jpg", "https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255859/Tutrtle%20house/Shower/oval-mirror-near-toilet-bowl-1910472_dognwb.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579558662/white-wooden-shelf-beside-bed-2062431_nrtib1.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579613457/blue-and-gray-concrete-house-with-attic-during-twilight-186077_wx3xq6.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579613562/black-flat-screen-tv-turned-off-210265_alzyj0.jpg"],
    //             "capacity": "2",
    //             "price": "170",
    //             "rating": "4.92",

    //         },
    //         {
    //             "_id": "5e2eebc51c9d4400006387db",
    //             "title": "house on the lake",
    //             "description": "Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi). Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view. Its the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches. You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums. Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.",
    //             "owner": {
    //                 "_id":  "5e2961ba155477000071afe4",
    //                 "fullName": "Yael Shenker",
    //                 "imgURL": "https://a0.muscache.com/im/pictures/user/e23d9c03-0de7-46f9-ba5a-c62a6358ff34.jpg?aki_policy=profile_x_medium"
    //             },
    //             "address": {
    //                 "country": "spain",
    //                 "coords":{
    //                     "lat": "0",
    //                     "lng": "0"
    //                 }
    //             },
    //             "imgs": ["https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255117/Tutrtle%20house/Bedrooms/apartment-bed-bedroom-chair-271624_mldlej.jpg", "https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255737/Tutrtle%20house/Kitchens/apartment-blinds-cabinets-chairs-349749_gycx19.jpg", "https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255859/Tutrtle%20house/Shower/oval-mirror-near-toilet-bowl-1910472_dognwb.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579558662/white-wooden-shelf-beside-bed-2062431_nrtib1.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579613457/blue-and-gray-concrete-house-with-attic-during-twilight-186077_wx3xq6.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579613562/black-flat-screen-tv-turned-off-210265_alzyj0.jpg"],
    //             "capacity": "2",
    //             "price": "170",
    //             "rating": "4.92",

    //         },
    //         {
    //             "_id": "5e2eebc51c9d4400006387db",
    //             "title": "house on the lake",
    //             "description": "Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi). Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view. Its the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches. You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums. Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.",
    //             "owner": {
    //                 "_id":  "5e2961ba155477000071afe4",
    //                 "fullName": "Yael Shenker",
    //                 "imgURL": "https://a0.muscache.com/im/pictures/user/e23d9c03-0de7-46f9-ba5a-c62a6358ff34.jpg?aki_policy=profile_x_medium"
    //             },
    //             "address": {
    //                 "country": "spain",
    //                 "coords":{
    //                     "lat": "0",
    //                     "lng": "0"
    //                 }
    //             },
    //             "imgs": ["https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255117/Tutrtle%20house/Bedrooms/apartment-bed-bedroom-chair-271624_mldlej.jpg", "https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255737/Tutrtle%20house/Kitchens/apartment-blinds-cabinets-chairs-349749_gycx19.jpg", "https://res.cloudinary.com/dnb7d7utg/image/upload/v1579255859/Tutrtle%20house/Shower/oval-mirror-near-toilet-bowl-1910472_dognwb.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579558662/white-wooden-shelf-beside-bed-2062431_nrtib1.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579613457/blue-and-gray-concrete-house-with-attic-during-twilight-186077_wx3xq6.jpg", "http://res.cloudinary.com/dnb7d7utg/image/upload/v1579613562/black-flat-screen-tv-turned-off-210265_alzyj0.jpg"],
    //             "capacity": "2",
    //             "price": "170",
    //             "rating": "4.92",

    //         }
    //     ]
    // }
    state = {
        houses: null

    }
    componentDidMount() {        
        this.loadReservedHouses()
        // eturn houses
    }
    loadReservedHouses = async () => {
        const orderIds = this.props.loggedInUser.reserved
        try {
            let storedOrders = await OrderService.getOrders({ orders: orderIds })
            let housesPrms = storedOrders.map(async (storedOrder) => {
                let house = await HouseService.get(storedOrder.houseId)
                house.status = storedOrder.status
                return house;
            })
            let houses = await Promise.all(housesPrms)            
            this.setState({ houses: houses })
        }
        catch (err) {
            throw err
        }
    }
    getFilteredHouses = (statusInput) => {
        let houses = this.state.houses.filter(house => { if (house.status === statusInput) return house })
        return houses
    }

    render() {
        const { houses } = this.state
        if (houses && houses.length === 0) return (<div className="reservedpage-container">            
            <div className="reserved-container-none">
                <h2 className="reservedpage">My Reserved Houses</h2>
                <div>No reserved items to show</div>
            </div>
        </div>)
        else {
            return (
                <div className="reservedpage-container">                    
                    {(this.props.isLoading || !houses) && <Loading />}
                    {(houses) && <div className="reservedpage-content-container">
                        <h2 className="reservedpage">My Reserved Houses</h2>
                        <div className="reservedpage-not-confirmed-houses">
                            <h3 className="reservedpage">Not Yet Confirmed by House Owner</h3>
                            {(houses) && <HouseList caller={"reservedpage"} houses={this.getFilteredHouses('initial')}></HouseList>}
                        </div>
                        <div className="reservedpage-confirmed-houses">
                            <h3 className="reservedpage">Confirmed by House Owner</h3>
                            {(houses) && <HouseList caller={"reservedpage"} houses={this.getFilteredHouses('accepted')}></HouseList>}
                        </div>
                        <div className="reservedpage-confirmed-houses">
                            <h3 className="reservedpage">Rejected by House Owner</h3>
                            {(houses) && <HouseList caller={"reservedpage"} houses={this.getFilteredHouses('rejected')}></HouseList>}
                        </div>
                    </div>}
                </div>
            )
        }
    }
}


const mapStateToProps = state => {
    return {
        // houses: state.house.houses,
        // filterBy: state.house.filterBy
        loggedInUser: state.user.loggedInUser
    };
};
// const mapDispatchToProps = {
//     // loadHouses,
//     filterHouses,
//     setFilter,
//     deleteHouse
// };

export default connect(mapStateToProps, null)(ResrvedPage)