import React from "react";

class Header extends React.Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <>
        <h2>Shopping List</h2>
        <h3>
          <a href="#">Lesson 11 </a>
        </h3>
      </>
    );
  }
}

const ShoppingList = () => {
  const [items] = React.useState({
    items1: "ogorki",
    items2: "sok",
    items3: "cos do picia",
  });
  return (
    <>
      <h1>Lista zakupow</h1>
      <ul>
        <ItemsList name={items.items1} example={2 + 2} />
        <ItemsList name={items.items2} example={1 + 2} />
        <ItemsList name={items.items3} example={4 * 2} />
      </ul>
    </>
  );
};
// to zmiana mozna pominac return
const ItemsList = ({ name, example }) => (
  <li>
    {name} - {example}
  </li>
);

const Footer = (props) => (
  <section className="stopka">
    <h3>I'm Footer</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
  </section>
);

// button onClick and handle


const App = () => {
  const [text,setText] = React.useState('')
  const handelOnClick = ()=>{
    // const letter = 'stop';
    setText(text + ' Dodaj i ')
  }
  return (
    <div>
      <Header />
      <ShoppingList />
      <button style={{margin:'2rem'}} onClick={handelOnClick}>doadaj A</button>
      <h1>{text}</h1>
      <Footer />
    </div>
  );
};

export default App;
