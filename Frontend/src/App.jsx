import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UseState from "./hooks/UseState";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import UseEffect from "./hooks/UseEffect";
import Form from "./components/Form";
import Todo from "./components/Todo";
const App=()=>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home name="vikraam" dept="CSE"/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/useState" element={<UseState/>}/>
      <Route path="/useEffect" element={<UseEffect/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/todo" element={<Todo/>}/>
    </Routes>
    </>
  )
}

export default App;