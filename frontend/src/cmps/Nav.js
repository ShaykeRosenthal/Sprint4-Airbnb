import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import '../assets/styles/nav.css'

import whiteLogo from '../assets/img/turtle3.png'
import blackLogo from '../assets/img/turtle4.png'
import userProfileImg from "../assets/img/user_prof_img.png";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import history from '../history'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, currPath: null, isMenuOpen: false };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }
    componentDidMount() {
        this.updateWindowDimensions();
        let path = this.props.history.location.pathname
        this.checkIfHome(path);
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    componentDidUpdate(prevProps) {        
        if (prevProps.location.pathname !== this.props.location.pathname) {
            let path = this.props.location.pathname;            
            this.checkIfHome(path)
        }       
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    toggleHamburger = () => {
        const screenWidth = this.state.width;
        let navListBackground = document.querySelector('.nav-list-background')
        if (screenWidth <= 700) {
            let menu = !this.state.isMenuOpen
            let newState = { isMenuOpen: menu }
            this.setState({ ...this.state, ...newState })            
            document.querySelector('.logo-burger').classList.toggle('open')
            navListBackground.classList.toggle('open')
            document.querySelector('.nav-list').classList.toggle('open')
            document.querySelector('.logo').classList.toggle('open')
            let searchBar = document.querySelector('.nav-search-bar')
            if (searchBar) searchBar.classList.toggle('open')
            let searchForm = document.querySelector('.search-form');
            if (searchForm) searchForm.classList.toggle('menu-open')
        }
        
    }
    changeClassName = (node, str, action) => {
        var children = node.childNodes;
        for (var i = 0; i < children.length; i++) {
            this.changeClassName(children[i], str, action);
        }
        if (action === 'add') {
            if (node && node.classList) node.classList.add(str)
        }
        if (action === 'remove') {
            if (node && node.classList && node.classList.contains(str)) node.classList.remove(str)
        }
    }
    checkIfHome = (path, userClick = false) => {
        if (path === '/') {
            let navContainer = document.querySelector('.nav-container')
            this.changeClassName(navContainer, 'home', 'add')

        }
        if (path !== '/') {
            let navContainer = document.querySelector('.nav-container')
            this.changeClassName(navContainer, 'home', 'remove')
        }
        this.setState({ ...this.state, currPath: path })
        if (userClick === true && this.state.width < 700) this.toggleHamburger()
    }
    profileImageRender = () => {
        if (this.state.width > 700) {
            if (this.props.loggedInUser) {
                return (
                    <div >
                        <div className="nav-item-user-img-container visible" >
                            <img src={this.props.loggedInUser.imgURL || userProfileImg} className="nav-item-user-img" />
                        </div>
                    </div>
                )
            } else {
                return (<div className="nav-link">Login/Signup</div>)

            }


        } else {
            if (this.props.loggedInUser) {
                return (<div className="nav-link">({this.props.loggedInUser.username})Logout</div>)
            } else {
                return (<div className="nav-link">Login/Signup</div>)
            }

        }

    }
    render() {        
        return (<div className="nav-container">
            <div className="nav-list-background"></div>
            <ul className="nav-list">
                <li>
                    <div className="logo-container" onClick={this.toggleHamburger}>
                        <img src={whiteLogo} alt="" className="logo" />
                        <span className="logo-burger">^</span>
                    </div>
                </li>
                {(this.state.currPath !== '/' && !this.state.isMenuOpen) && <li className="nav-item search-bar"><SearchBar /></li>}
                {(this.state.currPath !== '/') && <li className={"nav-item push"} onClick={() => this.checkIfHome('/', true)}><Link to="/" className="nav-link">Home</Link></li>}
                {this.props.loggedInUser && <li className={(this.state.currPath !== '/') ? "nav-item" : "nav-item push"} onClick={() => this.checkIfHome('/reserved', true)}><Link to="/reserved" className="nav-link" >Reserved</Link></li>}
                {this.props.loggedInUser && <li className="nav-item" onClick={() => this.checkIfHome('/requests', true)}><Link to="/requests" className="nav-link">Requets</Link></li>}
                {this.props.loggedInUser && <li className="nav-item" onClick={() => this.checkIfHome('/favorites', true)}><Link to="/favorites" className="nav-link">Favorites</Link></li>}
                {this.props.loggedInUser && <li className="nav-item" onClick={() => this.checkIfHome('/house/edit', true)}><Link to="/house/edit" className="nav-link">Host</Link></li>}
                {this.props.loggedInUser && <li className="nav-item" onClick={() => this.checkIfHome('/house/edit', true)}><Link to="/myhouses" className="nav-link">My Houses</Link></li>}
                <li className={(!this.props.loggedInUser) ? "nav-item push" : "nav-item"} onClick={() => this.checkIfHome('/about', true)}><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item" onClick={() => this.checkIfHome('/login', true)}><Link to="/login" className="nav-link">{this.profileImageRender()}</Link></li>
            </ul>

        </div>)
    }

}
const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
        isLoading: state.system.isLoading,
        currRoute: state.system.currRoute
    };
};
const mapDispatchToProps = {

};
export default Nav = withRouter(connect(mapStateToProps, null)(Nav))