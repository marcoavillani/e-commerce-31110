import "./App.css";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import ItemDetailContainer from "./item-detail-container/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemListContainer /> */}
    </div>
  );
}

export default App;
