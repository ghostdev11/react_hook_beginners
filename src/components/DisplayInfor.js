import React from "react";

class DisplayInfor extends React.Component{
  render(){
    // prop => viết tắt properties (tài sản)
    console.log(this.props)
    const {name, age} = this.props;
    return(
      <div>
        <div>My name's {name}</div>
        <div>My age's  {age}</div>
      </div>
    )
  }
}

export default DisplayInfor;