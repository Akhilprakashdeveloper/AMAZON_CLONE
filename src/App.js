import React from "react";
import Home from "./components/Home/Home";
import Listing from "./components/Listing/listing";
import Checkout from "./components/checkout/checkout";
import Cart from "./components/cart/cart";
import Register from "./components/register&login/Register";
import Login from "./components/register&login/Login";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Orders from "./components/Orders/Orders";
import { BrowserRouter, Route,Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/listing/:category" component={Listing} />
      <Route path="/checkout/:product" component={Checkout} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/placeorder/:buyproductid" component={PlaceOrder} />
      <Route path="/viewBooking" component={Orders} />
      <Route path="/orders" component={Orders} />

      
    </BrowserRouter>
  );
}

export default App;
