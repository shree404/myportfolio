import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Project from "./Pages/project";
import Reveal from "./Pages/demo";
import Barrier from "./components/Languages/barrier";
import SkillsHead from "./components/Languages/skillsheader";


function App() {
  return (
    <div className="flex justify-center bg-[#24272C] ">
    <div className="p-10 max-w-4xl ">
      <Home/>
      <About/>
      <Project/>
      <SkillsHead/>
      </div>
      
    </div>
  )
}

export default App;
