import React from "react";

export default class IncrButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 1
        }
    }

    render() {
        return (
            <button className='btn btn-danger' onClick={
                e => this.setState({
                    count: this.state.count * 2
                    }
                )}>
                Cliquez moi {this.state.count}
            </button>
        )
    }
}