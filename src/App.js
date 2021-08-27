import "./App.css";
import DashBoard from "./DashBoard";
import User from "./User";
import Product from "./Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import UserContext, { UserProvider } from "./UserContext";
import ProductContext, { ProductProvider } from "./ProductContext";
import TopBar from "./TopBar";

function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <TopBar />
              <div class="container-fluid">
                <Switch>
                  <UserProvider>
                    <Route path="/" component={DashBoard} exact={true} />
                    <Route path="/user" component={User} exact={true} />
                    <Route
                      path="/create-user"
                      component={CreateUser}
                      exact={true}
                    />
                    <Route
                      path="/user/edit/:id"
                      component={EditUser}
                      exact={true}
                    />

                    <ProductProvider>
                      <Route path="/product" component={Product} exact={true} />
                      <Route
                        path="/create-product"
                        component={CreateProduct}
                        exact={true}
                      />
                      <Route
                        path="/product/edit/:id"
                        component={EditProduct}
                        exact={true}
                      />
                    </ProductProvider>
                  </UserProvider>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
