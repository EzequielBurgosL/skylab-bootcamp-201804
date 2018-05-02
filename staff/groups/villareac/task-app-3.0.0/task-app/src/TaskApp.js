import React, { Component } from 'react';
import './TaskApp.css';
import Input from './Input'
import ListToDo from './ListToDo'
/* import Logic from './Logic' */


class TaskApp extends Component {
    constructor(){
        super() /* preguntar */

        this.state={
            taskAdded:'',
            toDo:[],
            done:[]
        }
        this.changeTaskAdded=this.changeTaskAdded.bind(this)
        this.submit=this.submit.bind(this)
        
    }
    changeTaskAdded(e){
        let taskAdded=e.target.value

        this.setState({
            taskAdded
        })
    }
    submit(e){

        e.preventDefault()

        const taskObject={
            text:this.state.taskAdded,
            id:Date.now(),
            done:false
        }

        this.setState(prevState =>{
           
            return {
                toDo: [...prevState.toDo, taskObject],
                taskAdded:''
            }
        })
    }

    markTaskDone(id){
        console.log(id)
    }
  
  render() {
    return (
      <div className="container">
        <h1>Task app</h1>
        
        

        <form onSubmit={this.submit}>
            <Input handleChange={this.changeTaskAdded} value={this.state.taskAdded}></Input>
            <button type='submit' value='add'>add</button>
        </form>
        <h2>TO-DO's</h2>
        <ListToDo tasks={this.state.toDo} markTaskDone={this.markTaskDone} />
        <h2>done's</h2>
        
      </div>
    );
  }
}

export default TaskApp;
