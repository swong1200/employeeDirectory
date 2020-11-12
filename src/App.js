import './App.css';
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

function getEmployees() {
  API.getEmployees().then(res => console.log(res.data.results)).catch(err => console.log(err));
}
getEmployees()

function App() {
  return (
    <div className="App">
      <Wrapper />
    </div>
  );
}

export default App;
