// class components
// hook components  
import React from "react";
class MyComponents extends React.Component{
  //.jsx
  // Một render() thì chỉ chứa được 1 element
  state = {
    name: 'quy',
    age : 21,
    address: 'hatinh'
  };
  render(){
    // .jsx
    return (
      <div>
        my name is {this.state.name} and i'm from country {this.state.address}
      </div>
      
    );
  }
}

export default MyComponents;