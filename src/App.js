// named and default import/export - nazwany i domyślny import/eksport
// nazwany i domyślny import/eksport
// only one default export module - tylko jeden domyślny moduł eksportowy
// think of module as file - pomyśl o module jak o pliku
// stateless functional components- bezstanowe elementy funkcjonalne
// class based components - komponenty oparte na klasach
// state, life cycle methods - stan, metody cyklu życia
// React Hooks - haki react
// Classes-syntactical sugar for constructor functions - Klasy - składniowy środek pomocniczy dla funkcji konstruktora
// subclass of components - podklasa elementów
// extends from component class -rozszerza się z klasy komponentu
// inherits functionality - dziedziczy funkcjonalność
// component class is used to transfer from basic E6 class - klasa składowa służy do przenoszenia z klasy podstawowej E6
// state, this.setState = hold/access/change data of component - stan, ten.ustawStan = trzymać / dostęp / zmiana danych komponentu
// props = read only - rekwizyty = tylko do odczytu

import React from "react";
// import "./index.css";
import BookList from "./BookList"
import "./App.css";
// import { render } from "@testing-library/react";

const App = () => {
  return (
    <section>
      {/* <h1>This is our Application</h1> */}
      <BookList/>
    </section>
  );
};

// class App1 extends Component {
//   render() {
//     return (
//       <section>
//         <Banner />
//         <p>this is my content</p>
//         <p>{name}</p>
//         <p>{age}</p>
//         <p>{person.name}</p>
//       </section>
//     );
//   }
// }
export default App;

// import calej daty
// import * as data from './data'
// const App = () => {
//   return (
//     <section>
//       <p>this is my content</p>
//       <p>{data.name}</p>
//       <p>{data.age}</p>
//       <p>{data.person.name}</p>
//     </section>
//   );
// };
