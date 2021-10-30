import React, { useContext} from 'react';
import {Dat_gen} from '../Componentes/Data_act_gen';
import 'materialize-css/dist/css/materialize.min.css';
const datos_2 = require('../helpers/Trabajo.json');


export function Activ_1(){

    const {formDG,setFormDG}= useContext(Dat_gen);

const handleCheckedAL= (e) =>{
   
    setFormDG({
        ...formDG,
        [e.target.name]:e.target.value,
    })
    
}


    return(
        <>
        <div class = "container">
        <h5>¿Cúal ha sido tu último grado de estudios que hayas concluido?</h5>
        
        <select class = "browser-default" name="Niv_Estud"  onChange={handleCheckedAL} >
        <option value = "">Selecciona alguna opción</option>
               {
                    datos_2.Trabjo[9].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
        </select>
    
        <br/>
        <h5>¿Trabajas en lo que estudiaste?</h5>
        <form>
        <div>  
            {/* Si */ }
            <label>
            <input type = "radio" 
            id="Trab_en_est_si"  
            name="Trab_en_est" 
            value="Si"
            onChange={handleCheckedAL}/>
            <span>Si</span>
            </label>
            
            {/* No */ }
            <label>
            <input type = "radio" 
            id="Trab_en_est_no"  
            name="Trab_en_est" 
            value="No"
            onChange={handleCheckedAL}/>
            <span>No</span>
            </label> 
            </div> 
        </form>      
            <br/>
            <br/>


        </div>
        </>
    ); 
}