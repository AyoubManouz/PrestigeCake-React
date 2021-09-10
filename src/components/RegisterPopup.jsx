import React, { Component } from "react";
import Logo from "../assets/Logo.png";

class RegisterPopup extends Component {
  state = {
    registerUser: {
        nom: "",
        prenom: "",
        sexe: "",
        email: "",
        is_admin: 0,
        password: "",
        password_confirmation: "",
    },
  };

  render() {
    return (
        <div className="text-sm w-full">
            <div className="flex justify-center">
                  <img width="70" height="70" src={Logo} alt="" />
              </div>
          <div className="p-2 sm:p-5 w-full">
            <div className="text-center text-lg font-bold text-primary">
              S'inscrire
            </div>
            <div className="my-5 mx-2">
              <table className="w-full">
                <tbody>
                  <tr className="h-16">
                    <label className="font-bold">Nom : </label>
                    <label>
                      <input
                        name="nom"
                        type="text"
                        placeholder="Nom"
                        defaultValue={this.state.registerUser.nom}
                        onChange={(event) => {
                          let registerUser = this.state.registerUser;
                          registerUser.nom = event.target.value;
                          this.setState({ registerUser });
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                  </tr>

                  <tr className="h-16">
                    <label className="font-bold">Prénom : </label>
                    <label>
                      <input
                        name="prenom"
                        type="text"
                        placeholder="Prénom"
                        defaultValue={this.state.registerUser.prenom}
                        onChange={(event) => {
                          let registerUser = this.state.registerUser;
                          registerUser.prenom = event.target.value;
                          this.setState({ registerUser });
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                  </tr>

                  <tr className="h-16">
                    <label className="font-bold">Sexe : </label>
                    <label>
                      <div className="flex items-center h-full">
                        <div className="mx-5 flex items-center">
                          <input
                            name="sexe"
                            type="radio"
                            onClick={(event) => {
                              let registerUser = this.state.registerUser;
                              registerUser.sexe = "H";
                              this.setState({ registerUser });
                            }}
                          />
                          Homme
                        </div>
                        <div className="mx-5 flex items-center">
                          <input
                            name="sexe"
                            type="radio"
                            onClick={(event) => {
                              let registerUser = this.state.registerUser;
                              registerUser.sexe = "F";
                              this.setState({ registerUser });
                            }}
                          />
                          Femme
                        </div>
                      </div>
                    </label>
                  </tr>

                  <tr className="h-16">
                    <label className="font-bold">Email : </label>
                    <label>
                      <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        defaultValue={this.state.registerUser.email}
                        onChange={(event) => {
                          let registerUser = this.state.registerUser;
                          registerUser.email = event.target.value;
                          this.setState({ registerUser });
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
                        placeholder="**************"
                        defaultValue={this.state.registerUser.password}
                        onChange={(event) => {
                          let registerUser = this.state.registerUser;
                          registerUser.password = event.target.value;
                          this.setState({ registerUser });
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                  </tr>

                  <tr className="h-16">
                    <label className="font-bold">
                      {" "}
                      Confirmer le Mot de passe :{" "}
                    </label>
                    <label>
                      <input
                        name="pwdConf"
                        type="password"
                        placeholder="**************"
                        defaultValue={
                          this.state.registerUser.password_confirmation
                        }
                        onChange={(event) => {
                          let registerUser = this.state.registerUser;
                          registerUser.password_confirmation =
                            event.target.value;
                          this.setState({ registerUser });
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                  </tr>
                </tbody>
              </table>

              <div className="w-full flex justify-center">
                <button
                  name="signUpBtn"
                  onClick={() => this.props.addUser(this.state.registerUser)}
                  className="btn rounded-lg py-1 px-5 text-white bg-primary hover:text-primary hover:bg-white border border-primary focus:outline-none"
                >
                  S'inscrire
                </button>
              </div>

              <button onClick={() => this.props.editPopup()} className="w-full flex justify-center text-primary my-5 hover:test-third focus:outline-none">
                J'ai déja un compte
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default RegisterPopup;
