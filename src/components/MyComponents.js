// class components
// hook components  
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
    console.log('my name is ',this.state.name)
  }

  handlerOnMoverOver(event){
    // console.log(event)
    // console.log(event.target)
    console.log(event.pageX)
  }

  render(){
    // .jsx
    return (
      <div>
        my name is {this.state.name} and i'm from country {this.state.address}
        <button onMouseOver={this.handlerOnMoverOver}>Hold me</button>
        <button onClick={this.handlerClick}>Click me</button>
      </div>
      
    );
  }
}

export default MyComponents;