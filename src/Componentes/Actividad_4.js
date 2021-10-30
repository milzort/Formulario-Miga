import React, {useState,createContext, useContext} from 'react';
import {Act_Lab} from './Data_act_lab';
const datos_4 = require('../helpers/Estudios.json');


export function Activ_4(){

const {formAL,setFormAL}= useContext(Act_Lab);
//const [area_est,setArea_est] = useState()

const handleCheckedAL_AE= (e) =>{
   
    setFormAL({
        ...formAL,
        [e.target.name]:e.target.value,
    });
    
    //setArea_est(e.target.value)
}


const handleCheckedAL= (e) =>{
   
    setFormAL({
        ...formAL,
        [e.target.name]:e.target.value,
    })
}

if(formAL.Niv_Estud || formAL.Tip_Estudiante){
var tatu = ((formAL.Niv_Estud==="Universidad"||formAL.Niv_Estud=="Posgrado") || (formAL.Tip_Estudiante=="Universidad"||formAL.Tip_Estudiante=="Posgrado"))
}
  console.log(tatu) 
  
    return(
        
        tatu ? (
        
        
            <div>
            <h2>Ahora queremos conocer más sobre tu formación académica</h2>
            <h5> Selecciona el área de conocimiento en el que te especializas </h5>
           

             <select name="Ar_estud" id="Ar_estud"  onChange ={handleCheckedAL_AE} >
                <option value = "">Selecciona tu área de conocimiento</option>
                {
                    datos_4.Estudio.map((el,i)=><option key={i} value={el.Area}>{el.Area}</option>)
                }
            </select>

            <br/>
            <br/>

            
         <select name="Esp_estud" id="Esp_estud"  onChange ={handleCheckedAL}>
                <option value = "">Selecciona tu especialidad</option>
                {
                    formAL.Ar_estud &&(
                        datos_4.Estudio[datos_4.Estudio.findIndex(masc => masc.Area === formAL.Ar_estud)].Escpecialidad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                    )
                }
            </select>     
        
            </div>
       
        
        ):(
            <div>
                <h2>Puedes continuar</h2>
            </div>
        )
        
        )
      
    
}