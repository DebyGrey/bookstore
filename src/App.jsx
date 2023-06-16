import './App.css'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import { Routes, Route } from "react-router-dom";
import Categories from "./routes/Categories";
import PageNotFound from './routes/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<BookList />}></Route>
        <Route path="categories" element={<Categories />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App
