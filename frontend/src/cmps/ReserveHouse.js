// import React, { Component } from "react";
// export default class HousePreview extends Component {
//     state = {

//     }


// }
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import DatePicker from '../cmps/DatePicker';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { connect } from 'react-redux';
import { setFilter } from '../actions/HouseActions'
// import { saveOrder } from '../actions/OrderActions'
import { getUserById } from '../actions/UserActions'
import '../assets/styles/index.css'
import Order from "../services/Order.js";
import localStorageService from "../services/localStorageService";
import UserService from "../services/UserService";
import OrderService from "../services/OrderService";
import {saveOrder} from "../actions/OrderActions";
class ReserveHouse extends Component {
    state = {
        filterBy: {
            numOfperson: 1,
            location: ''
        },
        startDate: null,
        endDate: null,

    }

    onChangeCap = async (diff) => {
        if (this.state.filterBy.numOfperson === 1 && diff === -1) return
        this.setState(prevState => prevState.filterBy.numOfperson += diff)
    }

    onChange = (ev) => {
        const key = ev.target.name
        const value = ev.target.value
        const filterBy = { ...this.state.filterBy }
        filterBy[key] = value
        this.setState({ filterBy })
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    }

    onSearch = () => {
        this.props.setFilter(this.state.filterBy)
    }
    onReserve = async (ev) => {
        ev.preventDefault();
        const user = this.props.loggedInUser;
        if (!user) {
            alert('login first!')
            return;
        } 
        let houseOrder = new Order(this.props.house._id,user._id, this.state.filterBy.numOfperson);
        console.log('ReserveHouse, user is: ',this.props.loggedInUser);
        try {
            await this.props.saveOrder(houseOrder)
            let orders=this.props.orders
            let storedOrderId=orders[orders.length-1]._id
            user.reserved.push(storedOrderId)
            await UserService.update(user)
        }
        catch(err){
            console.log('ReserveHouse: add house failed',err)
            throw err;
        }
        finally{
            console.log('check your reserved items ')
        }

    }

    addReserveClass = () => {
        if (!this.props.detailsPage) {
            return "search-form flex column space-between"
        }
        else {
            return "search-form flex column space-between reserve-form"
        }
    }

    render() {
        // const [startDate, setStartDate] = useState(null);
        const { house } = this.props;
        return (
            <div className={this.addReserveClass()}>
                <h4>Reserve now</h4>
                <input onChange={this.onChange} className="form-loc" value={this.state.filterBy.loc} type="text" name="location" placeholder={house.address.country + " | " + house.title}></input>
                <DatePicker></DatePicker>
                <div className="form-cap flex space-between align-center">
                    <span>How Many People?</span>
                    <span className="form-cap-control flex space-between">
                        <button onClick={() => this.onChangeCap(1)} className="form-num-btn pointer" name="numOfperson">+</button>
                        <span className="form-cap-num">{this.state.filterBy.numOfperson}</span>
                        <button onClick={() => this.onChangeCap(-1)} className="form-num-btn pointer" name="numOfperson">-</button>
                    </span>
                </div>

                <Link to="/house">
                    <button onClick={this.onReserve} className="form-btn pointer flex align-center justify-center">RESERVE</button>
                </Link>
            </div>)

}
}

const mapStateToProps = state => {
    return {
        filterBy: state.house.filterBy,
        loggedInUser: state.user.loggedInUser,
        orders:state.order.orders
    };
};
const mapDispatchToProps = {
    // setFilter
    saveOrder,
    getUserById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReserveHouse)











{/* <DateRangePicker
    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>
 */}