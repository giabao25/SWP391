import Footerss from "./components/Footers/Footerss"
import Contents from "./components/Contentss/contents"
import Headers from "./components/Header/Headers"
import About from "./components/Abouts/About"
import B1 from "./components/b1/B1"
import Course from "./components/Coursess/Course"
import "./App.css"
function App() {
  return (
    <div className="#">
      <Headers/>
      <Contents/>
      <About/>   
      <Course/> 
      <B1/>       
      <Footerss/>             
    </div>
  );
}

export default App;
