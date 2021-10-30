import React, {useState,useContext} from 'react';
import {Patic_Proy} from '../Componentes/Data_parti';


export default function Dat_parti_1(){
    const {setFormPP,formPP}= useContext(Patic_Proy);

    const handleChange= (e) =>{
        setFormPP({
           ...formPP,
           [e.target.name]:e.target.value,
       }); 
    } 



    return(
        <>
        <h2>¿Cómo te gustaría participar en este proyecto?</h2>

           

        <h3>Contesta con honestidad, no pasa nada y selecciona solo una opción.</h3>
            
            {/* Genero 1 */ }
            <input type = "radio" 
            id="Parti_A"  
            name="Tip_parti" 
            value="Parti_A"
            onChange={handleChange}/>
            <label htmlFor= "Parti_A" >Tienen mi apoyo, pero no puedo participar de forma activa.</label>
            <br/>
            {/* Genero 2 */ }
            <input type = "radio" 
            id="Parti_B"  
            name="Tip_parti" 
            value="Parti_B"
            onChange={handleChange}/>
            <label htmlFor= "Parti_B" >Me gustaría integrarme en algunas actividades digitales específicas
                                        que no me requieran mucho tiempo.</label>
                                        <br/>
            {/* Genero 3 */ }
            <input type = "radio"
             id="Parti_C"  
             name="Tip_parti" 
            value="Parti_C"
            onChange={handleChange}/>
            <label htmlFor= "Parti_C" >Podría participar en actividades de conformación del partido de forma activa
                                        siempre y cuando no intervengan con mis otras actividades.</label>
                                        <br/>
            {/* Genero 3 */ }
            <input type = "radio"
             id="Parti_D"  
             name="Tip_parti" 
            value="Parti_D"
            onChange={handleChange}/>
            <label htmlFor= "Parti_D" >Podría dedicar la mitad de mi tiempo de forma física y digital a la
                                        conformación del partido.</label>
                                        <br/>
            {/* Genero 3 */ }
            <input type = "radio"
             id="Parti_E"  
             name="Tip_parti" 
            value="Parti_E"
            onChange={handleChange}/>
            <label htmlFor= "Parti_E" >Podría dedicarme de tiempo completo de forma física y digital a la
                                        confomación del partido.</label>
            <br/>

            
            
            
            <br/>
            <br/> 

        
        </>
    ); 
}