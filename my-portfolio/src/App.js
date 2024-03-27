import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Project from "./Pages/project";
import Reveal from "./Pages/demo";


function App() {
  return (
    <div className="flex justify-center bg-[#24272C] ">
    <div className="p-10 max-w-4xl ">
      <Home/>
      <About/>
      <Project/>
      </div>
      
    </div>
  )
}

export default App;
