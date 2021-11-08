import React, { Component } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaTruckMoving, FaRegTimesCircle } from "react-icons/fa";

class DescriptionPage extends Component {
  state = {
    showLivraison: false,
  };

  btnLivraison = () => {
    if (this.state.showLivraison) {
      return <FaRegTimesCircle className="w-5 h-5" />;
    } else {
      return <FiPlusCircle className="w-5 h-5" />;
    }
  };

  render() {
    return (
      <div className="w-full mt-10">
        <div className="px-2">
          <div className="w-full font-serif p-2 bg-secondary text-third text-sm text-left">
            Description
          </div>
          <div className="font-mono text-left p-2">
            <p className="whitespace-pre-wrap text-justify">
              {this.props.description}
            </p>
          </div>
        </div>
        <div className="px-2 my-2">
          <div className="border-b-2 border-t-2 p-2 mb-2 border-third font-bold flex w-full">
            <span className="text-left">PAIEMENT&nbsp;&&nbsp;LIVRAISON</span>
            <div className="w-full"></div>
            <button
              className="btn focus:outline-none"
              onClick={() => {
                let showLivraison = this.state.showLivraison;
                showLivraison = !this.state.showLivraison;
                this.setState({ showLivraison });
              }}
            >
              {this.btnLivraison()}
            </button>
          </div>
          <div
            className={
              "m-2 flex justify-center " +
              (this.state.showLivraison ? "" : "hidden")
            }
          >
            <div className="font-mono text-left w-full whitespace-pre-wrap text-justify">
              Paiement à la livraison.<br />
              Vous optez pour un règlement de votre commande en espèce lors de sa réception.
              <h4 className="font-bold italic text-third" >Politique de livraison :</h4>
              Afin de vous assurer une meilleure expérience, les frais de livraison seront dorénavant calculés de façon plus optimale et dépendront des facteurs suivants :
              <ul>
                <li>
                  <span className="font-bold" >- Destination de la livraison :</span> les frais de livraison varient selon la distance entre la ville d'expédition et la ville de la livraison.
                </li>
                
                <li>
                  <span className="font-bold" >- Poids/ Taille :</span> les frais de livraison varient en fonction du poids et volume du colis. Moins le poids/volume est important moins vous payez de frais.
                </li>
                <li>
                  <span className="font-bold" >- Nombre d'articles :</span> les frais varient selon le nombres d'articles qui sont contenus dans votre panier.
                </li>
              </ul>
              <h4 className="font-bold italic text-third" >Délai de livraison :</h4>
              Le délai de livraison est comptabilisé à partir du jour où vous passez votre commande jusqu’au jour de notre première tentative de livraison.<br />
              Les jours ouvrables comptent du lundi au vendredi. Ils n’incluent pas les weekends et les jours fériés.
              <table class="table-fixed border border-primary">
                <thead>
                  <tr class="bg-red-100">
                    <th class="w-1/2">La ville</th>
                    <th class="w-1/2">Délai de livraison</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border border-primary">
                    <td>Casablanca</td>
                    <td>24h</td>
                  </tr>
                  <tr class="border border-primary">
                    <td>Marrakech</td>
                    <td>24h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DescriptionPage;
