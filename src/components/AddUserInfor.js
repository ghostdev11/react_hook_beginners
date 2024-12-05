import React, { useState } from "react";
import MyComponents from "./MyComponents";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     age: 21,
//     address: "",
//   };
//   handlerOnChangeInput = (event) => {
//     // setState thuộc tính name của state{}.
//     this.setState({
//       name: event.target.value,
//     });
//     // console.log(event, event.target.value)
//   };
//   handlerOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handlerOnSubmit = (event) => {
//     event.preventDefault();
//     // console.log(this.state);
//     this.props.handlerAddUser({
//       id: Math.floor(Math.random() * 100) + 1 + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//     // khi gọi hàm để thực thi thì có dấu () ngc lại than chiếu thì không có dấu ().
//   };
//   render() {
//     return (
//       <div>
//         my name is {this.state.name} and i'm {this.state.age} years old
//         <form onSubmit={(event) => this.handlerOnSubmit(event)}>
//           <label>Name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handlerOnChangeInput(event)}
//           />
//           <label>Age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handlerOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfor = (props) => {
  //   state = {
  //     name: "",
  //     age: 21,
  //     address: "",
  //   };
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("Ha Tinh");

  const handlerOnChangeInput = (event) => {
    // setState thuộc tính name của state{}.
    setName(event.target.value);
    // this.setState({
    //   name: event.target.value,
    // });
    // console.log(event, event.target.value)
  };
  const handlerOnChangeAge = (event) => {
    setAge(event.target.value);
    // this.setState({
    //   age: event.target.value,
    // });
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state);
    props.handlerAddUser({
      id: Math.floor(Math.random() * 100) + 1 + "-random",
      name: name,
      age: age,
    });
  };
  //     // khi gọi hàm để thực thi thì có dấu () ngc lại than chiếu thì không có dấu ().
  return (
    <div>
      my name is {name} and i'm {age} years old
      <form onSubmit={(event) => handlerOnSubmit(event)}>
        <label>Name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handlerOnChangeInput(event)}
        />
        <label>Age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handlerOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
