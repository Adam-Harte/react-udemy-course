import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }

    componentDidMount () {
        this.setTitle();
    }

    componentDidUpdate () {
        this.setTitle();
    }

    setTitle () {
        const url = new URLSearchParams(this.props.location.search);
        for (let value of url.entries()) {
            if (this.state.courseTitle !== value[1]) {
                this.setState({courseTitle: value[1]});
            }
        }
    }
    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;