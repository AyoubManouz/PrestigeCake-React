import React, { Component } from "react";
import Logo from "../assets/Logo.png";

class SignInPopup extends Component {
  state = {
    loginUser: {
      email: "",
      password: "",
    },
  };

  render() {
    return (
        <div className="text-sm w-full">
            <div className="flex justify-center">
                  <img width="70" height="70" src={Logo} alt="" />
              </div>
          <div className="p-2 sm:p-5 w-full">
            <div className="text-center text-lg font-bold text-primary w-full">
              S'identifier
            </div>
            <div className="my-5 justify-center w-full">
              <table className="w-full h-full text-md">
                <tbody>
                  <tr className="h-16">
                    <label className="font-bold">Email : </label>
                    <label>
                      <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        onChange={(event) => {
                          let loginUser = this.state.loginUser;
                          loginUser.email = event.target.value;
                          this.setState({ loginUser });
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                  </tr>

                  <tr className="h-16">
                    <label className="font-bold">Mot de passe : </label>
                    <label>
                      <input
                        name="pwd"
                        type="password"
                        onChange={(event) => {
                          let loginUser = this.state.loginUser;
                          loginUser.password = event.target.value;
                          this.setState({ loginUser });
                        }}
                        placeholder="**************"
                        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                  </tr>
                </tbody>
              </table>

              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  name="loginBtn"
                  onClick={() => this.props.loginUser(this.state.loginUser)}
                  className="btn rounded-lg py-1 px-5 text-white bg-primary hover:text-primary hover:bg-white border border-primary focus:outline-none"
                >
                  S'identifier
                </button>
              </div>

              <a href="/forget_password" className="w-full flex justify-center text-primary my-5 hover:test-third">
                Vous avez oubliée votre mot de passe ?
              </a>
              
              <button onClick={() => this.props.editPopup()} className="w-full flex justify-center text-primary my-5 hover:test-third focus:outline-none">
                Créer un nouveau compte
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default SignInPopup;
