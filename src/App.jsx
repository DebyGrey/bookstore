import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Categories from "./routes/Categories";
import PageNotFound from "./routes/PageNotFound";
import Home from "./routes/Home";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="categories" element={<Categories />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
