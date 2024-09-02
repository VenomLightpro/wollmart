import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About /> } />
            <Route path="blog" element={<Blog /> } />
            <Route path="contact" element={<Contact /> } />
            <Route path="login" element={<Login /> } />
            <Route path="product/:id" element={<SingleProduct /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
