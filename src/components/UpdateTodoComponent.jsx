import React, { Component } from 'react';

import TodoService from '../Services/TodoService';

class UpdateTodoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: "",
            completed: "",
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeCompletedHandler = this.changeCompletedHandler.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }
    componentDidMount(){
        TodoService.getTodoById(this.state.id).then((res) =>{
            let todo = res.data;
            this.setState({title: todo.title, completed: todo.completed});
            
        })
    }
    updateTodo = (e) => {
        e.preventDefault();
        let todo = {title: this.state.title, completed: this.state.completed};
        console.log('todo =>' + JSON.stringify(todo));
        TodoService.updateTodo(todo, this.state.id).then(res => {
            this.props.history.push('/todos');
        })
        
        
    }
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value}); 
    }
    changeCompletedHandler= (event) => {
        this.setState({completed: event.target.value}); 
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
                    <h3 className='text-center'>Update Todo</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>What to do: </label>
                                <input name="title" value={this.state.title} onChange={this.changeTitleHandler}/>
                                <br/>
                                <label>Completed?: </label>
                                <input name="completed" value={this.state.completed} onChange={this.changeCompletedHandler}/>
                            </div>
                            <button className='btn btn-success' onClick={this.updateTodo}>Update Todo</button>
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

export default UpdateTodoComponent;