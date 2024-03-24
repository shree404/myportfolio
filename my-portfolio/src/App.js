import Nav from "./components/nav";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";

function App() {
  return (
    <div className="flex justify-center bg-[#24272C] ">
    <div className="p-10 max-w-4xl   rounded-xl shadow-md flex items-center space-x-4 border border-black-500">
      <Home/>
      </div>
    </div>
  )
}

export default App;
