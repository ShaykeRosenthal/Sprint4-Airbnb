import React, { Component } from "react";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { connect } from 'react-redux';
import { setFilter } from '../actions/HouseActions'
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import '../assets/styles/index.css'


class SearchForm extends Component {
    state = {
        filterBy: {
            numOfperson: 1,
            location: ''
        },
        startDate: null,
        endDate: null
    }

    onChangeCap = (diff) => {
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

    render() {
        // const [startDate, setStartDate] = useState(null);
        return <div className="search-form flex column space-between">
            {/* <form> */}
            <h2>Feel At Home, Wherever You Go</h2>
            <input onChange={this.onChange} className="form-loc" value={this.state.filterBy.loc} type="text" name="location" placeholder="Where To Go?"></input>
            <div className="form-cap flex space-between align-center">
                <span>How Many People?</span>
                <span className="form-cap-control flex space-between">
                    <button onClick={() => this.onChangeCap(1)} className="form-num-btn pointer">+</button>
                    <span className="form-cap-num">{this.state.filterBy.numOfperson}</span>
                    <button onClick={() => this.onChangeCap(-1)} className="form-num-btn pointer">-</button>
                </span>
            </div>

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

            {/* <Link onClick={this.handleClick} className="form-btn pointer flex align-center justify-center" to="/house">Search</Link> */}
            <Link to="/house">
                <button onClick={this.onSearch} className="form-btn pointer flex align-center justify-center">Search</button>
            </Link>
            {/* <button className="form-btn pointer" >Search</button> */}
            {/* </form> */}
        </div>
    }

}

const mapStateToProps = state => {
    return {
        filterBy: state.house.filterBy
    };
};
const mapDispatchToProps = {
    setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)

// export default SearchForm