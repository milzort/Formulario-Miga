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
        <div class = "container">
        <h5>¿Cómo te gustaría participar en este proyecto?</h5>

           

        <h6>Contesta con honestidad, no pasa nada y selecciona solo una opción.</h6>
        <form> 
            <label htmlFor= "Parti_A" >
            {/* Genero 1 */ }
            <input type = "radio" 
            id="Parti_A"  
            name="Tip_parti" 
            value="Parti_A"
            onChange={handleChange}/>
            <span>Tienen mi apoyo, pero no puedo participar de forma activa.</span>
            </label>
            <br/>

            {/* Genero 2 */ }
            <label htmlFor= "Parti_B" >
            <input type = "radio" 
            id="Parti_B"  
            name="Tip_parti" 
            value="Parti_B"
            onChange={handleChange}/>
           <span> Me gustaría integrarme en algunas actividades digitales específicas
                                        que no me requieran mucho tiempo.</span>
            </label>
            <br/>





            {/* Genero 3 */ }
            <label htmlFor= "Parti_C" >
            <input type = "radio"
             id="Parti_C"  
             name="Tip_parti" 
            value="Parti_C"
            onChange={handleChange}/>
            <span> Podría participar en actividades de conformación del partido de forma activa
                                        siempre y cuando no intervengan con mis otras actividades.</span>
            </label>
            <br/>

            {/* Genero 4 */ }
            <label htmlFor= "Parti_D" >
            <input type = "radio"
             id="Parti_D"  
             name="Tip_parti" 
            value="Parti_D"
            onChange={handleChange}/>
            <span>Podría dedicar la mitad de mi tiempo de forma física y digital a la
                                        conformación del partido.</span>
            </label>
            <br/>

                                    
            {/* Genero 5 */ }
            <label htmlFor= "Parti_E" >
            <input type = "radio"
             id="Parti_E"  
             name="Tip_parti" 
            value="Parti_E"
            onChange={handleChange}/>
            <span>Podría dedicarme de tiempo completo de forma física y digital a la
                                        confomación del partido.</span>
            </label>
            <br/>

            
            </form>
            
            <br/>
            <br/> 

        </div>
        </>
    ); 
}