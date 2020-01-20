import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import ChatBox from '../cmps/ChatBox'
import NavBar from '../cmps/NavBar'
import '../assets/styles/housedetails.css';
import HouseService from '../services/HouseService'



export default class HouseDetails extends Component {
    state = {
        house: null
    }

    componentDidMount() {
        const houseId = this.props.match.params.id;
        console.log(houseId)
        this.loadHouse(houseId)
    }

    loadHouse = async (houseId) => {
        const house = await HouseService.get(houseId)
        this.setState({ house })

    }
    render() {
        const { house } = this.state
        return (
            <React.Fragment>
                <NavBar style={{ "position": "fixed", "top": "0px", "backgroundColor": "lightblue" }}></NavBar>
                <section className="housedetails-container">
                    <div className="images-container">
                        {(house)&&<div className="gallery">
                            <img key={1} className="img img-1" src={house.imgs[0]} alt="" />
                            <img key={2} className="img img-2" src={house.imgs[1]} alt="" />
                            <img key={3} className="img img-3" src={house.imgs[2]} alt="" />
                            <img key={4} className="img img-4" src={house.imgs[3]} alt="" />
                            <img key={5} className="img img-5" src={house.imgs[4]} alt="" />
                        </div>}
                    </div>
                    {/* <ChatBox house={this.house}></ChatBox> */}
                </section>
            </React.Fragment>
        )
    }
}









// componentDidMount() {
//     this.loadHouse()
// }

// loadHouse = () => {
//     const houseId = this.props.match.params.id;
//     houseService.get(houseId).then(car=>{
//         this.setState({car});
//     })
//     console.log(houseId);
// }

// const mapStateToProps = state => {
//     return {
//     };
//   };
//   const mapDispatchToProps = {
//   };

//   export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails)