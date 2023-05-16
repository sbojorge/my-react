import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.selectCategory = React.createRef();
        this.addComment = React.createRef();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value);
        console.log(this.selectCategory.current.value);
        console.log(this.addComment.current.value);       
    }
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='id-name'>Your name:</label>
                        <input
                            type='text'
                            id='id-name'
                            name='name'
                            ref={this.inputName}
                            defaultValue='Gatita'
                         />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Query category:</label>
                        <select id='id-category' name='category' ref={this.selectCategory}>
                            <option value='website'>Website issue</option>
                            <option value='order'>Order issue</option>
                            <option value='general'>General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea id='id-comments' name='comments' ref={this.addComment}/>
                    </div>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm
