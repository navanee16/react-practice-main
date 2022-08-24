import logo from './logo.svg';
import './App.css';
import './components/Name.js';
import Food from './components/Name.js';

function App() {
  const food =[
    { id:"food1",
    name:"lemonrice",
    amount:"Rs:45",
  },

  
  ];
  return (
    <div className="App">
      <header className='header-wrapper'>
        
          <div className='logo'>Nature Foods</div>
           <nav className='navig'>
            <a href='#'>signin</a>
            </nav>
        
    
      </header>
      <Food name={food[0].name} amount={food[0].amount}></Food>
      
      
    </div>
  );
}

export default App;
