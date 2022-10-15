import logo from './logo.svg';
import './App.css';
import Navbar from './compnents/Navbar';
import Text from './compnents/TextForm';


function App() {
  return (
    <>
     <Navbar title="Textutils" aboutText="About Us"/>
     <div className="container my-3">
      <Text heading="Enter the text to analyze below"/>
     </div>
    </>
  );
}

export default App;
