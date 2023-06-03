import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
  return(
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Hero>
      </Hero>
      <Highlights></Highlights>
      <Categories></Categories>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
