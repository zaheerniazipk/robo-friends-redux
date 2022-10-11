import React, { Component } from "react";
import { connect } from 'react-redux';
import './App.css';
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField } from '../actions';


const mapStateToProps = state => {
    return {
        SearchField: state.SearchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
            // searchfield: ''
        }
    }

    // React LifeCycle
    componentDidMount() {
        // console.log(this.props.store.getState());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // }

    render() {
        const { robots } = this.state;
        const { SearchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(SearchField.toLowerCase());
        })

        return !robots.length ?
            <h1>Loading!!!</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);