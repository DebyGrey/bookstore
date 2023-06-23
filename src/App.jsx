import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Categories from "./routes/Categories";
import PageNotFound from './routes/PageNotFound';
import Home from './routes/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default App
