import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "./App.css" ;
export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        tasks : [
          { id: 0 , action: "wake up" , isDone: true},
          { id: 1 , action: "have coffee" , isDone: false},
        ],
        newText:"",
    }
  }
  //Deliting task from the list
  handleDelete = (index) => {
    this.setState({ tasks:this.state.tasks.filter(el=>el.id !==index)  });
  }
  //handling your finished and unfinished tasks
  handleComplete = (index) =>{
    this.setState({ tasks: this.state.tasks.map(el=>
      el.id===index ? el.isDone= { ...el,isDone :! el.isDone  } : el
      ) });
  }
  //handle changes in the input fieled
  handleChange = (e) => { 
          this.setState({ newText : e.target.value });
  }
  //Adding tasks to the list
  handleAdd = (text) => {
    const newTask = {
      id:this.state.tasks.length,
      action : text,
      isDone : false,
    }
    this.state.newText.trim() ===""?
    alert('pleas fell out the form') :
    this.setState({ tasks: [...this.state.tasks,newTask]  });
    this.setState({newText: " "  });
  }
  render() {
    return (
      <div className="app" >
        <div className="todo-list">
          <div className="title">Our to-do list </div>

          <form onSubmit= {(e)=>e.preventDefault(e)} >
            <input onChange={this.handleChange} type="text" placeholder="Entrer a task"  value={this.state.newText} />
            <button  class="btn btn-warning" type="submit" onClick={()=>this.handleAdd(this.state.newText)  }>Add</button>
          </form>

          <div className="todo-list">
            { this.state.tasks.map(el=>
            <div> 
              <div className="todo-list" > {el.action} </div>
              <button class="btn btn-warning" id="del" onClick={()=>this.handleDelete(el.id)} >Delete</button>
             <></>  <button class="btn btn-warning" onClick={()=>this.handleComplete(el.id)}  >
                {el.isDone? "Undo" : "Complete" }
              </button>
            </div>
            ) }
          </div>

        </div>

      </div>
    )
  }
}

export default App