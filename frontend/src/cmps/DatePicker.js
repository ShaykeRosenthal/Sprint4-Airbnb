import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { connect } from 'react-redux';
import { setFilter, filterHouses } from '../actions/HouseActions'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController, toMomentObject } from 'react-dates';
import moment from 'moment'
// import '../assets/styles/index.css'


export default class DatePicker extends Component {

    state = {
        startDate: null,
        endDate: null
    }

    handleChange = (key, date) => {
        this.setState({
            [key]: date
        });
    }
    
    sendDates = () => {
        this.props.changeDates({ ...this.state })
    }    
    
    

    render() {
       
        return <DateRangePicker
            startDatePlaceholderText ='mm/dd/yyyy'
            endDatePlaceholderText = 'mm/dd/yyyy'
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="start-date" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="end-date" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate }, () => this.sendDates())}  // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
    }
}