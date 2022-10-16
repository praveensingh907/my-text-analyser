import logo from './logo.svg';
import './App.css';
import Navbar from './compnents/Navbar';
import Text from './compnents/TextForm';
// import About from './compnents/About';



function App() {
  return (
    <>
     <Navbar title="Textutils" aboutText="About Us"/>
     <div className="container my-3">
      <Text heading="Enter the text to analyze below"/>
      {/* <About/>  */}
     </div>
     
    </>
  );
}

export default App;
