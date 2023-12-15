import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Userlisting from "./Component/Userlisting";
import Adduser from "./Component/Adduser";
import Updateuser from "./Component/Updateuser";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <h2>
              <Link to={"/"}>Reeco</Link>
            </h2>
            <h4>
              <Link to={"/user"}>Store</Link>
            </h4>
            <h4>
              <Link>Order</Link>
            </h4>
            <h4>
              <Link>Analytics</Link>
            </h4>
          </div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/user" element={<Userlisting></Userlisting>}></Route>
            <Route path="/user/add" element={<Adduser></Adduser>}></Route>
            <Route
              path="/user/edit/:code"
              element={<Updateuser></Updateuser>}
            ></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          className="toast-position"
          position="bottom-right"
        ></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
