// class components
// hook components  
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
class MyComponents extends React.Component{
  //.jsx
  // Một render() thì chỉ chứa được 1 element
  // state la 1 object
  state = {
    name: 'quy',
    age : 21,
    address: 'hatinh'
  };
  handlerClick (event){
    console.log('>>> Hello ban from react');
    // console.log(event);
    // console.log('age:', this.state.age)
    this.setState(
      {
        name: 'eric',
        age: (Math.floor(Math.random() * 100)+1)
      }
    )
    // this.setState(
    //   {age: Math.floor(Math.random() * 100)+1}
    // )
  }

  handlerOnMoverOver(event){
    // console.log(event)
    // console.log(event.target)
    console.log(event.pageX)
  }

  handlerOnChangeInput = (event)=> {
    // setState thuộc tính name của state{}.
    this.setState(
      {
        name: event.target.value
      }
    )
    // console.log(event, event.target.value)
  }

  handlerOnSubmit = (event)=> {
    event.preventDefault();
    console.log(this.state)
  }
  render(){
    // .jsx
    return (
      <div>
        my name is {this.state.name} and i'm from country {this.state.address}
        <form onSubmit={(event)=> this.handlerOnSubmit(event)}>
          <input 
          type="text"
          onChange={(event) => this.handlerOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
      
    );
  }
}

export default MyComponents;