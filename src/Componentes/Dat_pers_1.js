import React, {useState,Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'materialize-css/dist/css/materialize.min.css';

export default function Dat_per_1(){
    const[form,setForm] = useState({});
    const [fech_nam, setFech_Nam] = useState(new Date());

    const handleChange= (e) =>{
       setForm({
           ...form,
           [e.target.name]:e.target.value,
       }); 
    } 


    const handleChangeTime= (e) =>{
        setForm({
            ...form,
            [e.name]:e.date,
        }); 
     } 


    return(

        <>
         
         
        <h5>¿Cómo te llamas?</h5>

           
            <input type= "text" id="apellidos" name="apellidos" 
            value={form.name} 
            onChange={handleChange}
            placeholder="Apellidos"/>
       <br/>
       <br/>
       <input type= "text" id="nombre" name="nombre" 
            value={form.name} 
            onChange={handleChange}
            placeholder="Nombre"/>
        
        <br/>
       
        <h5>¿Con que género género te identificas?</h5>
        <form action="#"> 
            {/* Genero 1 */ }
            <label htmlFor= "Masculino" >
            <input type = "radio" 
            id="Masculino"  
            name="genero" 
            value="Masculino"
            onChange={handleChange}/>
            <span>Masculino</span>
            </label>

            {/* Genero 2 */ }
            <label htmlFor= "Femenino">
            <input type = "radio" 
            id="Femenino"  
            name="genero" 
            value="Femenino"
            onChange={handleChange}/>
            <span>Femenino</span>
            </label>
            {/* Genero 3 */ }
            <label htmlFor= "No_bin" >
            <input type = "radio"
             id="No_bin"  
             name="genero" 
            value="No_bin"
            onChange={handleChange}/>
            <span>No Binario</span>
            </label>
            </form>
         
            <br/>
          
        <h5>Indica cuando naciste</h5>
        <DatePicker   name="fecha_nac" id="fecha_nac" selected={fech_nam} onChange={(date) => setFech_Nam(date)} />
            
            
   
            <br/>
            <br/> 

           
        </>
    ); 
}