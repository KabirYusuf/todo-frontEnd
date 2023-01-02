import React, { Component } from 'react';
import TodoService from '../Services/TodoService';

class CreateTodoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo = (e) => {
        e.preventDefault();
        let todo = {title: this.state.title};
        // console.log('todo =>' + JSON.stringify(todo));
        TodoService.createTodo(todo).then(res =>{
            this.props.history.push("/todos");
        })
    }
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value}); 
    }
    cancel(){
        this.props.history.push("/todos"); 
    }
    render() {
        return (
            <div>
               <div className='container'>
                <div className='row'>
                   <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Todo</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>What to do: </label>
                                <input name="title" value={this.state.title} onChange={this.changeTitleHandler}/>
                            </div>
                            <button className='btn btn-success' onClick={this.addTodo}>Add Todo</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        </form>
                    </div>
                    </div> 
                </div>
                </div> 
            </div>
        );
    }
}

export default CreateTodoComponent;