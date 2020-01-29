import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveHouse } from '../../actions/HouseActions';

class ReviewCompose extends Component {

    state = {
        reviewToEdit: {
            "byUser": {
                "_id": "123456789",
                "fullName": "User",
                "img": "https://assets.change.org/photos/3/tk/jh/EhtkjhXwrIKnips-800x450-noPad.jpg?1515932574"
            },
            "txt": '',
            "rate": 4,
            "createdAt": "2020-01-15T07:51:18.138Z",
        }
    };

    handleChange = ev => {
        const { name, value } = ev.target;
        this.setState(prevState => ({
            reviewToEdit: {
                ...prevState.reviewToEdit,
                [name]: value
            }
        }));
    };

    addReview = async (ev) => {
        ev.preventDefault();
        try {
            const { house } = this.props
            console.log(house)
            let updatedHouse = {...house}
            console.log(updatedHouse);
            updatedHouse.reviews.push(this.state.reviewToEdit)
            await this.props.saveHouse(updatedHouse);
            this.setState(prevState => ({
                reviewToEdit: {
                    ...prevState.reviewToEdit,
                    "txt": ''
                }
            }));
        } catch (error) {
            console.log('add review to house faild');
            throw error;
            
        }
    };

    render() {
        return (
            <section>
                <form onSubmit={this.addReview}>
                    <textarea
                        name="txt"
                        onChange={this.handleChange}
                        value={this.state.reviewToEdit.txt}
                    ></textarea>
                    <button>Add</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        houses: state.house.houses,
        //   users: state.user.users,
        //   loggedInUser: state.user.loggedInUser
    };
};
const mapDispatchToProps = {
    // loadReviews,
    // loadUsers,
    saveHouse
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCompose);

