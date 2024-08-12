// class components
// hook components  
import React from "react";
class MyComponents extends React.Component{
  //.jsx
  // trong render chỉ được chứa 1 element()
  render(){
    return (
      <div>my first components
        {Math.random()}
      </div>
      
    );
  }
}

export default MyComponents;