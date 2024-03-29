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
        <h5>Ahora sí, saca tu credencial de elector
recuerda que este campo es opcional,
si decides ponerlo nos ayudas a saber
dónde tenemos presencia y validar tu información.
Si aún no cumples 18 años no te preocupes
déjalo vacío.</h5>

           
            <input type= "text" id="C_E" name="C_E" 
            value={formDG.name} 
            onChange={handleChange}
            placeholder="Clave de Elector"/>
       <br/>
       <br/>
       <input type= "text" id="D_E" name="D_E" 
            value={formDG.name} 
            onChange={handleChange}
            placeholder="Distrito Electoral"/>
        <br/>
        </div>
        </>
    ); 
}