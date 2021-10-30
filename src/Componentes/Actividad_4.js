import React, { useContext} from 'react';
import {Dat_gen} from '../Componentes/Data_act_gen';
const datos_4 = require('../helpers/Estudios.json');


export function Activ_4(){
    
    const {formDG,setFormDG}= useContext(Dat_gen);
//const [area_est,setArea_est] = useState()

const handleCheckedAL_AE= (e) =>{
   
    setFormDG({
        ...formDG,
        [e.target.name]:e.target.value,
    });
    
    //setArea_est(e.target.value)
}


const handleCheckedAL= (e) =>{
   
    setFormDG({
        ...formDG,
        [e.target.name]:e.target.value,
    })
}

if(formDG.Niv_Estud || formDG.Tip_Estudiante){
var tatu = ((formDG.Niv_Estud==="Universidad"||formDG.Niv_Estud==="Posgrado") || (formDG.Tip_Estudiante==="Universidad"||formDG.Tip_Estudiante==="Posgrado"))
}
  console.log(tatu) 
  
    return(
        
        
        
        tatu ? (
            <div class = "container">
        
            <div>
            <h5>Ahora queremos conocer más sobre tu formación académica</h5>
            <h5> Selecciona el área de conocimiento en el que te especializas </h5>
           

             <select class = "browser-default" name="Ar_estud" id="Ar_estud"  onChange ={handleCheckedAL_AE} >
                <option value = "">Selecciona tu área de conocimiento</option>
                {
                    datos_4.Estudio.map((el,i)=><option key={i} value={el.Area}>{el.Area}</option>)
                }
            </select>

            <br/>
            <br/>

            
         <select class = "browser-default" name="Esp_estud" id="Esp_estud"  onChange ={handleCheckedAL}>
                <option value = "">Selecciona tu especialidad</option>
                {
                    formDG.Ar_estud &&(
                        datos_4.Estudio[datos_4.Estudio.findIndex(masc => masc.Area === formDG.Ar_estud)].Escpecialidad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                    )
                }
            </select>     
        
            </div>
            </div>
        
        ):( <div class = "container">
            <div>
                <h5>Puedes continuar</h5>
            </div>
            </div>
        )
        
        )
      
       
}