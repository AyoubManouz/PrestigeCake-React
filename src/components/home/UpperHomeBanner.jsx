import React, { Component } from "react";
import Loader from "react-loader-spinner";
import Axios from "../../Axios";

import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require("react-responsive-carousel").Carousel;

class UpperHomeBanner extends Component {
  state = {
    banners: [],
    isLoaded: false,
  };

  componentWillMount() {
    Axios.get("/banner")
      .then((result) => {
        this.setState({
          banners: result.data.banners,
          isLoaded: true,
        });
      })
      .catch((errors) => {
        console.log("errors");
        console.log(errors);
      });
  }

  showBanners = () => {
    if (this.state.isLoaded) {
      return (
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          useKeyboardArrows={true}
          swipeable={true}
          emulateTouch={true}
          stopOnHover={false}
          interval="3000"
        >
          {this.state.banners.map((banner) => {
            return (
              <div className="w-full">
                <img src={this.props.imgPrefix + banner.image} className="w-full object-cover" alt="" />
              </div>
            );
          })}
        </Carousel>
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
      <div className="w-full">
        {this.showBanners()}
      </div>
    );
  }
}

export default UpperHomeBanner;
