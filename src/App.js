import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hola, inicio de nuestro e-commerce :D</h1>
      <div style={{ height: 300, width: 300, backgroundColor: "red" }}>
        <h1>A dentro del div</h1>
      </div>
    </div>
  );
}

export default App;
