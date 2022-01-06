import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/AboutUs/About";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Products/Product";
import Register from "./Pages/Registration/Register";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About />} />
         <Route path='/login' element={  <Login />} />
         <Route path='/main' element={   <Main />} />
         <Route path='/products' element={   <Product />} />
         <Route path='/profile' element={   <Profile />} />
         <Route path='/register' element={   <Register />} />
        </Routes>
      </BrowserRouter>
       <Footer />
    </div>
  );
}

export default App;
