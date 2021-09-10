import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { SiCodechef } from "react-icons/si";
import SignInPopup from "./SignInPopup";
import RegisterPopup from "./RegisterPopup";

class UserDontExistLoginPopup extends Component {
  state = {
    userHaveAccount : true,
  };

  editPopup = () => {
    this.setState({userHaveAccount : !this.state.userHaveAccount})
  }

  popupToShow = () => {
    if(this.state.userHaveAccount){
      return <SignInPopup loginUser={this.props.loginUser} editPopup={this.editPopup} />
    }
    return <RegisterPopup addUser={this.props.addUser} editPopup={this.editPopup} />
  }

  render() {
    return (
      <Popup
        trigger={
          <button className="hover:bg-secondary px-1 py-1 rounded-md text-sm font-medium flex items-center justify-center focus:outline-none">
            <SiCodechef className="text-third h-6 w-6" />
          </button>
        }
        modal
        nested
      >
        {this.popupToShow()}
      </Popup>
    );
  }
}

export default UserDontExistLoginPopup;
