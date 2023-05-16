import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='id-name'>Your name:</label>
                    <input onChange={this.handleChangeName} value={this.state.name} type='text' id='id-name' name='name' />
                    <input type='submit' value='Submit' />

                </form>
            </div>
        )
    }
}

export default ControlledForm
