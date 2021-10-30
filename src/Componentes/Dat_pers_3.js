import React, {useState,Component} from 'react';


export default function Dat_per_3(){
    const[form,setForm] = useState({});

    const handleChange= (e) =>{
       setForm({
           ...form,
           [e.target.name]:e.target.value,
       }); 
    } 




    return(
        <>
        <h2>¿Cómo podemos contactarte?</h2>

           
            <input type= "text" id="email" name="email" 
            value={form.name} 
            onChange={handleChange}
            placeholder="E-mail"/>
       <br/>
       <br/>
       <input type= "text" id="telefono" name="telefono" 
            value={form.name} 
            onChange={handleChange}
            placeholder="Telefono (10 Digi)"/>
        <br/>
        
        </>
    ); 
}