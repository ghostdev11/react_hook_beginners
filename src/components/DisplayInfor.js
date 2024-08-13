import React from "react";

class DisplayInfor extends React.Component {
  state= {
    isShowListUser: true,
  };
  handlerShowHide = () => {
    this.setState({
      isShowListUser: ! this.state.isShowListUser,
    })
  };
  render() {
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handlerShowHide();
            }}
          >
            {this.state.isShowListUser === true ? 'Hide listUser.' : 'Show listUser.'}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
