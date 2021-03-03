// named and default import/export
// only one default export module
// think of module as file

import React from "react";
import { name, age, person } from "./data";
import Banner from './component/Header/Banner'

const App = () => {
  return (
    <>
    <section>
    <Banner/>
      <p>this is my content</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{person.name}</p>
    </section>
    </>
  );
};

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








export default App;
