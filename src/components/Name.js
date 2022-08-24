import "./Name.css";
import image from "../images/lemonrice.jpg"



function Food(props){
    return(<div className="container">
        
        <div className="class1">
            
            <p>{props.name}</p><p>{props.amount}</p></div>
            <div className="class2"><img src={image}/></div>
    </div>);
}
export default Food;