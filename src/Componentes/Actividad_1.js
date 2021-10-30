import React, {useState,createContext, useContext} from 'react';
import {Act_Lab} from '../Componentes/Data_act_lab';
const datos_2 = require('../helpers/Trabajo.json');

export function Activ_1(){

const {formAL,setFormAL}= useContext(Act_Lab);

const handleCheckedAL= (e) =>{
   
    setFormAL({
        ...formAL,
        [e.target.name]:e.target.value,
    })
    
}


    return(
        <>
        <h2>¿Cúal ha sido tu último grado de estudios que hayas concluido?</h2>
        
        <select name="Niv_Estud"  onChange={handleCheckedAL} >
        <option value = "">Selecciona alguna opción</option>
               {
                    datos_2.Trabjo[9].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
        </select>
    
        <br/>
        <h2>¿Trabajas en lo que estudiaste?</h2>
            
            {/* Si */ }
            <input type = "radio" 
            id="Trab_en_est_si"  
            name="Trab_en_est" 
            value="Si"
            onChange={handleCheckedAL}/>
            <label htmlFor= "Si" >Si</label>
            {/* No */ }
            <input type = "radio" 
            id="Trab_en_est_no"  
            name="Trab_en_est" 
            value="No"
            onChange={handleCheckedAL}/>
            <label htmlFor= "No">No</label>        
            <br/>


        
        </>
    ); 
}