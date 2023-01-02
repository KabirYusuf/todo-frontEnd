import React, { Component } from 'react';
import TodoService from '../Services/TodoService';

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    editTodo(id){
        this.props.history.push(`/update-todo/${id}`);
    }
    deleteTodo(id){
        TodoService.deleteTodo(id).then(res =>{
           this.setState({todo: this.state.todos.filter(todo => todo.id !==id)}); 
        })
    }
    componentDidMount(){
        TodoService.getTodos().then((res) => {
            this.setState({todos: res.data});
        })
    }
    addTodo(){
        this.props.history.push("/add-todo");
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Todo List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addTodo}>Add Todo</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                            <th>
                                   Id
                                </th>
                                <th>
                                   Title
                                </th>
                                <th>
                                   Completed 
                                </th>
                                <th>
                                   Actions 
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                   todo =>
                                   <tr key = {todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed}</td>
                                    <td>
                                        <button onClick={() => this.editTodo(todo.id)} className="btn btn-info">
                                            Update
                                        </button>

                                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteTodo(todo.id)} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>

                                   </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
}

export default ListTodosComponent;