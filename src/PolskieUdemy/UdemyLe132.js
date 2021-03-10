import React from "react";
import img from "../assets/img.png";
import Links from '../Links';

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

// componet funkcyjna
const App = () => {
  const [text, setText] = React.useState("");
  const [value, setValue] = React.useState("");

  // wersja 1
  // const handelOnClick = ()=>{
  //   setText(text + ' dodaj i')
  // }
  // wersja 2
  const handelOnClick = () => setText(`${text} i dodaj`);
  const handleOnChange = (event) => setValue(event.target.value);
  const handleOnClick2 = () => setValue("");
  return (
    <div>
      <Header />
      <ShoppingList />
      <button style={{ margin: "2rem", padding:'8px', width:'100px',cursor:'pointer' }} onClick={handelOnClick}>
        add
      </button>
      <h1>{text}</h1>
      <img src={img} alt="iphone" width="150" style={{margin:'2rem'}} />
<div style={{margin:'1rem'}}>
      <input
      style={{margin:'1rem', padding:'5px',width:'150px', height:'30px', border:'none'}}
      
        value={value}
        placeholder="write..."
        onChange={handleOnChange}
        type="text"
      />
      <button onClick={handleOnClick2} className='btn'>Reset</button>
      <h1>{value.toUpperCase()}</h1>
</div>
<Links/>
      <Footer />
    </div>
  );
};

export default App;
