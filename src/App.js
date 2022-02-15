import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Router from "./routes/Router";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router />
      </CartProvider>
    </div>
  );
}

export default App;
