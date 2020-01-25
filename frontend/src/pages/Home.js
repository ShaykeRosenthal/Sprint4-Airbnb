import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setFilter, filterHouses} from '../actions/HouseActions'

import SearchForm from '../cmps/SearchForm';
import backgroundImage from '../assets/img/bgc.jpg'
import HouseList from '../cmps/HouseList';
import NavBar from '../cmps/NavBar';

// import { connect } from 'react-redux';

// import { loadReviews, addReview } from '../actions/ReviewActions.js';
// import { loadUsers } from '../actions/UserActions.js';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {};

  componentDidMount() { 
    console.log('home', this.props.filterBy)
    console.log('welcome back to turtle house user : ',this.props.loggedInUser)
    // debugger
    this.load()
    
  }
  
  load= async()=>{
    // await this.props.setFilter({location:'',numOfperson:1})
    // debugger
    this.props.filterHouses({ location: '', numOfperson: 1, nightsNum: 1})
    
  }


  // getBestByCountry = (country) => {
  //   this.props.houses
  //   .filter(house => house.country === country)
  //   .filter(house => house.rating > 7)
  // }
  

  handleChange = ev => { };

  render() {
    return (
      <div className="home">
        <NavBar caller={"home"}></NavBar>
        <img className="index-cover" src={backgroundImage} />
        <SearchForm></SearchForm>
        <button>blah</button>
       {this.props.houses.length&&<HouseList houses={this.props.houses}></HouseList>} 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      houses: state.house.houses,
      filterBy: state.house.filterBy,
      loggedInUser: state.user.loggedInUser,
      isLoading: state.system.isLoading
  };
};
const mapDispatchToProps = {
  setFilter,
  // loadHouses,
  filterHouses
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
