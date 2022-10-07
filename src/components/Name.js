import "./Name.css";
import {useState} from "react"


function Food(props){
    const[price,setPrice]=useState(props.price)
    const updetePrice=()=>{
    let newPrice =((50/100)*props.price)
    setPrice(newPrice);
    }
    


return(
<div className="container">
        <div className="class1">
            <div className="pic">
                <img src={props.image}/>
                <p>{props.name}</p>
                <p>{price}</p><br></br>
                <button onClick={updetePrice}>Apply click</button>
            </div>
        
        </div>
     
   
    </div>
    );
}
export default Food;