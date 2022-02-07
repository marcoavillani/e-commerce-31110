import "./App.css";
// import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import ItemListContainer from "./components/item-list-container/ItemListContainer";
// import ItemDetailContainer from "./components/item-detail-container/ItemDetailContainer";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <ItemDetailContainer /> */}
      {/* <ItemListContainer /> */}
      <Router />
    </div>
  );
}

export default App;
