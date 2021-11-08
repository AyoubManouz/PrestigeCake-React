import React, { Component } from "react";
import Loader from "react-loader-spinner";
import Axios from "../../Axios";

class Indesponsable extends Component {
  state = {
    produits: [],
    isLoaded: false,
  };

  uploadCategories = () => {
    Axios.get("/indesponsable")
      .then((result) => {
        this.setState({
          produits: result.data.produits,
          isLoaded: true,
        });
      })
      .catch((errors) => {
        console.log("errors");
        console.log(errors);
      });
  };

  componentWillMount() {
    this.uploadCategories();
  }

  showIndesponsable = () => {
    if (this.state.isLoaded) {
      return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2">
          {this.state.produits.map((produit) => {
            return (
              <div key={produit.id} className="lg:mx-5 mx-3 my-2">
                <a href={"/Produit/" + produit.id} className="w-auto">
                  <div className="focus:outline-none p-1">
                    <div className="flex justify-center">
                      <div className="rounded-lg border-4 border-primary p-1 w-64 h-64">
                        <img
                          className="rounded-lg border-2 rounded border-primary"
                          src={
                            this.props.imgPrefix +
                            produit.images[0].image_content
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <span className="text-center text-lg font-bold italic text-third">
                      {produit.titreProduit}
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="flex justify-center w-full">
          <Loader type="ThreeDots" color="#F06970" height="50" width="100" />
        </div>
      );
    }
  };

  render() {
    return (
      <div className="w-auto xl:px-32 md:px-20 mx-auto mt-10">
        <div className="grid w-full grid-cols-6 items-center">
          <div className="col-span-2">
            <div className="bg-primary rounded-full w-full h-1"></div>
          </div>
          <div className="col-span-2">
            <h5 className="font-serif font-bold italic text-primary text-center text-2xl">
              LES INDISPONSABLES
            </h5>
          </div>
          <div className="col-span-2">
            <div className="bg-primary rounded-full w-full h-1"></div>
          </div>
        </div>
        <div className="text-2xl italic my-5">
          Si vous souhaitez vous lancer dans le cake design . nous vous
          proposons une liste du matériel à patisserie et les ingrédients
          necessaire à la réalisation de tous vos cake design aux meilleurs prix
          sur notre site.
        </div>
        {this.showIndesponsable()}
      </div>
    );
  }
}

export default Indesponsable;
