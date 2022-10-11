import React, { Component } from "react";
import { connect } from 'react-redux';
import './App.css';
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from '../actions';


const mapStateToProps = state => {
    return {
        SearchField: state.searchRobots.SearchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { robots, SearchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(SearchField.toLowerCase());
        })

        return isPending ?
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