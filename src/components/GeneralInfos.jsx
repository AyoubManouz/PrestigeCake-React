import React, { Component } from 'react';

class GeneralInfos extends Component {
    render() { 
        return (
        <div className="w-auto xl:px-32 md:px-20 mx-auto mt-10">
            <div id="about">
                <div className="font-mono text-left w-full whitespace-pre-wrap text-justify">
                    <h1 className="font-bold italic text-primary" >Qui sommes-nous ?</h1>
                    Bienvenue dans Monde des Gateaux la boutique en ligne N°1 au Maroc pour les amoureux de cake design ! Ici, vous trouverez des ustensiles pour réaliser tous vos gâteaux. <br />
                    Fondée par une passionnée du cake design, de rendre le matériel pour pâtisserie accessible via internet au plus grand nombre. <br />
                    Grâce à notre site accessible à tous et facile d’utilisation, retrouvez les meilleurs articles, pas cher et de qualité professionnelle : <br />
                    Pâte à sucre, moules à gâteaux, colorant alimentaire, cake board, boîtes à gâteaux,… aussi des articles de fête pour la décoration d’anniversaire, de mariage ou baby-shower… <br />

                </div>
            </div>
            <div id="paiement">
                <div className="font-mono text-left w-full whitespace-pre-wrap text-justify">
                    <h1 className="font-bold italic text-primary" >Paiment et Laivraison</h1>
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
    );}
}
 
export default GeneralInfos;