import FlightDataAPI from "./components/Flight_Data_API";
import LocationSearch from "./components/LocationSearch";
import logo from './world.svg';

function App() {
  return (
    <main>
      <div className="container">
        <h1>Travel Finder</h1>
        
        <img src={logo} alt="Logo" className="App-logo"/>
        
        <FlightDataAPI/>

       
      </div>
    </main>
  );
}
export default App;
