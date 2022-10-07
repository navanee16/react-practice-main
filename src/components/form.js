import React, {useState} from "react";
import "./form.css";



function Form(props){
    const[form,setForm]=useState({
        name:"",
        price:0
    }
    );
    
    const nameHandler = (event) =>{        
        setForm({...form, name:event.target.value});
     }

    const priceHandler =(event) =>{
        setForm({...form, price:event.target.value});
        
    }

    const subjectHandler=(event) =>{
        event.preventDefault();
    
        props.onNewfoodAdded(form);
        setForm({
            name:"",
            price:""
        })
    }

return(<div className="var">
    <form>
        <label>name:
        <input type="text" placeholder="name"  onChange={nameHandler}/></label>
        <label>price:
        <input type="text" placeholder="price"  onChange={priceHandler}/></label>
        <input type="submit" onClick={subjectHandler}/>
   </form>
</div>

)


    
}
export default Form;