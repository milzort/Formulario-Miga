import React, {useContext} from 'react';
import {Dat_gen} from '../Componentes/Data_act_gen';


export default function Dat_per_3(){
    const {formDG,setFormDG}= useContext(Dat_gen);

    const handleChange= (e) =>{
        setFormDG({
           ...formDG,
           [e.target.name]:e.target.value,
       }); 
    } 




    return(
        <>
         <div class = "container">

        <h5>¿Cómo podemos contactarte?</h5>

           
            <input type= "text" id="email" name="email" 
            value={formDG.name} 
            onChange={handleChange}
            placeholder="E-mail"/>
       <br/>
       <br/>
       <input type= "text" id="telefono" name="telefono" 
            value={formDG.name} 
            onChange={handleChange}
            placeholder="Telefono (10 Digi)"/>
        <br/>
        </div>
        </>
    ); 
}