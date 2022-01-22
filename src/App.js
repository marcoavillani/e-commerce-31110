import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { ClassComponent } from "./components/class-component/ClassComponent";
import FunctionalComponent from "./components/functional-component/FunctionalComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import ComponentChildren from "./component-children/ComponentChildren";

const age = 18;

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hola, inicio de nuestro e-commerce :D</h1>
      <hr />
      <ClassComponent name="Rodolfo" age={age} />
      <hr />
      <FunctionalComponent name="Juan Carlos" age={age} />
      <hr />
      <ItemListContainer />
      <ComponentChildren otherProp="El título">
        <h1>Hola, soy un componente hijo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          illum blanditiis molestias ab voluptatibus, impedit ducimus reiciendis
          suscipit tempora, odio repellat exercitationem repellendus at dolorem
          recusandae, illo est mollitia dolorum!
        </p>
      </ComponentChildren>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
