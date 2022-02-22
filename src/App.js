import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Router from "./routes/Router";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router />
      </div>
      <hr />
      <footer>
        <p>© 2022 Marco Villani</p>
      </footer>
    </CartProvider>
  );
}

export default App;
