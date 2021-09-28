import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />`
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/productlist" component={ProductList} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;