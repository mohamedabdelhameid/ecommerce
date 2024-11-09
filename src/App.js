import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Logging from "./logging";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Pages/Product";
import Home from "./Pages/Home";
import FetchApi from "./homeApi";
import Logging1 from "./loginPast";
import Userinformation from "./userInformation";
// import product from "./Products";
// import Products from "./Pages/Product";
import Ffetch from "./Products";
import Contaction from "./Contact";
import FavoritesProduct from "./favoritesProduct";
import YourProduct from "./yourProduct";
import Productdetails from "./productDetails";
import ProductList from "./productList";
// import { Provider } from "react-redux";
// import { store } from "./rtk/store";
// import FetchApi from 'module';
// import { createStore } from "redux";
// import { ReducerCounter } from "./redux/reducer";
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductDetailsContainer from "./productDetails";
import Cart from "./cart";

// let store = createStore(ReducerCounter);

function App() {
  return (
    <>
      {/* <Logging /> */}
      <Provider store={store}>
        <Router>
            {/* <Provider store={store}> */}
          <Routes>

            {/* <Route path="/" exact Component={Logging} />
            <Route path="/product" Component={FetchApi} />
            <Route path="/login" Component={Logging1} /> */}
            <Route path="/" exact Component={FetchApi} />
            <Route path="/newlogin" Component={Logging} />
            <Route path="/login" Component={Logging1} />
            {/* <Route path="/userInformation" Component={Userinformation} /> */}
            {/* <Route path="/product" Component={Ffetch} /> */}
            <Route path="/product" Component={ProductList} />
            <Route path="/contact" Component={Contaction} />
            <Route path="/buys" Component={Cart} />
            <Route path="/product/:id" Component={ProductDetailsContainer} />
            {/* <Route path="/products/:id" component={ProductDetailsContainer} /> */}

          </Routes>
            {/* </Provider> */}
        </Router>
      </Provider>
      {/* <FetchApi /> */}
    </>
  );
}

export default App;



// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import ProductList from './ProductList';

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <header className="App-header">
//           <h1>My Store</h1>
//         </header>
//         <ProductList />
//       </div>
//     </Provider>
//   );
// }