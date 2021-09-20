import React, { useEffect, useState, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Promos from "./MainPagePromos";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import HeaderBig from "./HeaderSample";
import ScrollToTop from "./ScrollToTop";
import GetCategory from "./GetCategory";
import GetSearchResults from "./GetSearchResults";
import {
  fetchFeatured,
  fetchCarousel,
  fetchResults,
} from "../redux/ActionCreators";
import { connect } from "react-redux";

const CarouselComponent = React.lazy(() => import("./CarouselComponent"));
const Result = React.lazy(() => import("./ResultComponent"));
const ItemDetail = React.lazy(() => import("./ItemDetail"));
const LoginComponent = React.lazy(() => import("./LoginComponent"));
const SignUpComponent = React.lazy(() => import("./SignUpComponent"));
const CartComponent = React.lazy(() => import("./CartComponent"));
const OrderComponent = React.lazy(() => import("./OrderComponent"));
const WishlistComponent = React.lazy(() => import("./WishlistComponent"));

const mapStateToProps = (state) => {
  return {
    featured: state.featured,
    carousel: state.carousel,
    results: state.results,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFeatured: () => dispatch(fetchFeatured),
  fetchCarousel: () => dispatch(fetchCarousel),
  fetchResults: (category) => dispatch(fetchResults(category)),
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: () => {
        return null;
      },
      disabled: false,
      resultsLoaded: -1,
    };
    this.loginClicked = this.loginClicked.bind(this);
    this.loginCancelled = this.loginCancelled.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeatured();
    this.props.fetchCarousel();
    this.props.fetchResults();
  }

  sendItem({ match }) {
    var prodId = match.params.prod_id.slice(0, 4);
    var item;
    var mainCategory;
    if (prodId === "elec") {
      mainCategory = GetCategory("electronics");
      if (mainCategory != undefined) {
        for (var i = 0; i < mainCategory.length; i++) {
          var pro = mainCategory[i].prod_id;
          if (JSON.stringify(match.params.prod_id) === JSON.stringify(pro)) {
            item = mainCategory[i];
            break;
          }
        }
      }
    } else if (prodId === "mens") {
      mainCategory = GetCategory("men");
      if (mainCategory != undefined) {
        for (var i = 0; i < mainCategory.length; i++) {
          var pro = mainCategory[i].prod_id;
          if (JSON.stringify(match.params.prod_id) === JSON.stringify(pro)) {
            item = mainCategory[i];
            break;
          }
        }
      }
    } else if (prodId === "wome") {
      mainCategory = GetCategory("women");
      if (mainCategory != undefined) {
        for (var i = 0; i < mainCategory.length; i++) {
          var pro = mainCategory[i].prod_id;
          if (JSON.stringify(match.params.prod_id) === JSON.stringify(pro)) {
            item = mainCategory[i];
            break;
          }
        }
      }
    } else if (prodId === "kids") {
      mainCategory = GetCategory("kids");
      if (mainCategory != undefined) {
        for (var i = 0; i < mainCategory.length; i++) {
          var pro = mainCategory[i].prod_id;
          if (JSON.stringify(match.params.prod_id) === JSON.stringify(pro)) {
            item = mainCategory[i];
            break;
          }
        }
      }
    } else if (prodId === "spor") {
      mainCategory = GetCategory("sports");
      if (mainCategory != undefined) {
        for (var i = 0; i < mainCategory.length; i++) {
          var pro = mainCategory[i].prod_id;
          if (JSON.stringify(match.params.prod_id) === JSON.stringify(pro)) {
            item = mainCategory[i];
            break;
          }
        }
      }
    } else if (prodId === "book") {
      mainCategory = GetCategory("books");
      if (mainCategory != undefined) {
        for (var i = 0; i < mainCategory.length; i++) {
          var pro = mainCategory[i].prod_id;
          if (JSON.stringify(match.params.prod_id) === JSON.stringify(pro)) {
            item = mainCategory[i];
            break;
          }
        }
      }
    }
    if (item == undefined) {
      var loading = {
        name: "Loading",
      };
      return (
        <div style={{ backgroundColor: "white" }}>
          <ItemDetail item={loading} />
        </div>
      );
    }
    return (
      <div style={{ backgroundColor: "white" }}>
        <ItemDetail item={item} mainCategory={mainCategory} />
      </div>
    );
  }
  headerMain() {
    var width = window.innerWidth;
    if (width > 800) {
      return (
        <HeaderBig
          loginClicked={this.loginClicked}
          firstname={this.props.firstname}
          lastname={this.props.lastname}
        />
      );
    } else {
      return (
        <Header
          loginClicked={this.loginClicked}
          firstname={this.props.firstname}
          lastname={this.props.lastname}
        />
      );
    }
  }
  loginClicked() {
    this.setState({
      disabled: true,
    });
    return this.setState({
      login: () => {
        return (
          <div id="loginBox">
            <LoginComponent loginCancelled={this.loginCancelled} />
          </div>
        );
      },
    });
  }
  loginCancelled() {
    this.setState({
      disabled: false,
    });
    return this.setState({
      login: () => {
        return null;
      },
    });
  }

  render() {
    const SendResult = ({ match }) => {
      var num = parseInt(match.params.str.slice(0, 1));
      if (num === 6) {
        var string = match.params.str.slice(1);
        var results;
        results = GetSearchResults(string);
        if (this.state.resultsLoaded !== num) {
          this.setState({
            resultsLoaded: num,
          });
        }
        return (
          <div style={{ backgroundColor: "white" }}>
            <Result category={undefined} results={results} />
          </div>
        );
      } else {
        var mainCategory;
        var category = match.params.str.slice(1);
        if (num === 0) mainCategory = "electronics";
        else if (num === 1) mainCategory = "men";
        else if (num === 2) mainCategory = "women";
        else if (num === 3) mainCategory = "kids";
        else if (num === 4) mainCategory = "sports";
        else if (num === 5) mainCategory = "books";
        if (this.state.resultsLoaded !== num) {
          this.props.fetchResults(mainCategory);
          this.setState({
            resultsLoaded: num,
          });
        }
        return (
          <div style={{ backgroundColor: "white" }}>
            <Result category={category} results={this.props.results.results} />
          </div>
        );
      }
    };

    const cartModal = {
      width: "80%",
      backgroundColor: "cyan",
    };

    return (
      <div className="bg">
        <Suspense fallback={<div>Loading...</div>}>
          <div disabled={this.state.disabled}>{this.headerMain()}</div>
          <div style={{ height: "0px" }}>{this.state.login()}</div>
          <div disabled={this.state.disabled}>
            <Switch>
              <ScrollToTop>
                <Route
                  path="/emart"
                  component={() => {
                    return (
                      <div>
                        <div className="carouselItem">
                          <CarouselComponent
                            items={this.props.carousel.carouselItems}
                          />
                        </div>
                        <div>
                          <Promos arr={this.props.featured.featured} />
                        </div>
                      </div>
                    );
                  }}
                />
                <Route path="/result/:str" component={SendResult} />
                <Route path="/itemDetail/:prod_id" component={this.sendItem} />
                <Route path="/signup" component={() => <SignUpComponent />} />
                <Route path="/cart" component={() => <CartComponent />} />
                <Route path="/orders" component={() => <OrderComponent />} />
                <Route
                  path="/wishlist"
                  component={() => <WishlistComponent />}
                />
                <Redirect to="/emart" />
              </ScrollToTop>
            </Switch>
          </div>
          <div disabled={this.state.disabled}>
            <Footer />
          </div>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
