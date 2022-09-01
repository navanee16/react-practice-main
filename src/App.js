import logo from './logo.svg';
import './App.css';
import './components/Name.js';
import { useState } from 'react';
import pic1 from "./images/lemonrice.jpg";
import pic2 from "./images/curdrice.jpg";
import Form from './components/form.js'; 
import Food from './components/Name.js';


function App() {
  const food =[
    { id:"food1",
    name:"Lemonrice",
    price: 45,
    image: pic1
  },
  { id:"food2",
    name:"Curdrice",
    price: 45,
    image: pic2 
  },
  { id:"food3",
  name:"Tomato rice",
  price: 45,
  image: pic1 
},
{ id:"food2",
  name:"Veg fried rice",
  price: 50,
  image: pic2 
},
]

const [dinner,setDinner] = useState([...food])


const onnewFood = (newfood)=>{
  setDinner((Prev)=>{
    return[...Prev,newfood]
  })
}
  return (
    <div className="App">
      <header>
        <div className='header-wrapper'>
            <div className='logo'>Nature Foods</div>
            <nav className='navig'>
              <a href='#'>signin</a>
            </nav>
        </div>
      </header>
      <Form onNewfoodAdded ={onnewFood}></Form>
      <div className='main'>
        {
        dinner.map((food)=>{
        return(<Food key={Math.random()} name={food.name} price={food.price} image={food.image}></Food>)
        })
        }    
      </div>
    </div>
  );
}

export default App;
