import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: 'Website issue',
            comment: ''
        }
    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    pickCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    addComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form>
                    <div>
                        <label htmlFor='id-name'>Your name:</label>
                        <input onChange={this.handleChangeName} value={this.state.name} type='text' id='id-name' name='name' />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Query category:</label>
                        <select  onChange={this.pickCategory} value={this.state.category} id='id-category' name='category'>
                            <option value='website'>Website issue</option>
                            <option value='order'>Order issue</option>
                            <option value='general'>General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea value={this.state.comment} onChange={this.addComment} id='id-comments' name='comments' />
                    </div>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default ControlledForm
