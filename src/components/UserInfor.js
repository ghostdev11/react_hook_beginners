import React from "react";
import MyComponents from "./MyComponents";

class UserInfor extends React.Component{
  state = {
    name: 'quy',
    age : 21,
    address: 'hatinh'
  };
  handlerOnChangeInput = (event)=> {
    // setState thuộc tính name của state{}.
    this.setState(
      {
        name: event.target.value
      }
    )
    // console.log(event, event.target.value)
  }
  handlerOnChangeAge = (event)=> {
    this.setState(
      {
        age: event.target.value
      }
    )
  }

  handlerOnSubmit = (event)=> {
    event.preventDefault();
    console.log(this.state)
  }
  render(){
    return(
      <div>
        my name is {this.state.name} and i'm from country {this.state.age}
        <form onSubmit={(event)=> this.handlerOnSubmit(event)}>
          <label>Name: </label>
          <input 
          value={this.state.name}
          type="text"
          onChange={(event) => this.handlerOnChangeInput(event)}
          />
          <label>Age: </label>
          <input 
          value={this.state.age}
          type="text"
          onChange={(event) => this.handlerOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default UserInfor;