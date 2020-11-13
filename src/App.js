import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <SearchForm />
      </Wrapper>
    </div>
  );
}

export default App;
