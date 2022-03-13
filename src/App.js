import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Router from "./routes/Router";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <div className="App">
          <Router />
        </div>

        <footer>
          <p>© 2022 Marco Villani</p>
        </footer>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
