import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

class FormPage extends Component {
    constructor() {
        super();
        this.state = {id: '', title: '', content: '', date: '', archived: false};
    
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.apiUrl = "http://localhost:54321/notes/";
      }


    // {
    //     id: 1,
    //     title: "hello, first note",
    //     content: "here is the content",
    //     date: moment().format("yyyy/MM/dd/hh:mm:hh"),
    //     archived: false,
    // }
    handleSubmit(){
        this.setState({id: '0'});
        console.table(this.state);
        axios.post(this.apiUrl, JSON.stringify(this.state));
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value});
     }

     handleContentChange(e) {
        this.setState({content: e.target.value});
     }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label style={{float: "left", color: "white", fontSize: "18px", fontWeight: "300"}}>Title</label>
                    <input className="form-control" placeholder="Enter Title" value={this.state.title} onChange={this.handleTitleChange}/>
                </div>

                <div className="form-group">
                    <label style={{float: "left", color: "white", fontSize: "18px", fontWeight: "300"}}>Content</label>
                    <textarea className="form-control" rows="3" placeholder="Enter content" value={this.state.content} onChange={this.handleContentChange}></textarea>
                </div>
                <button type="submit" className="btn btn-outline-light">Submit</button>
            </form>
        )
    }
}

export default FormPage;