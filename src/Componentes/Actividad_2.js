import 'materialize-css/dist/css/materialize.min.css';
import React, {useState,createContext, useContext} from 'react';
import {Act_Lab} from '../Componentes/Data_act_lab';


export function Activ_2(){
    const {formAL,setFormAL}= useContext(Act_Lab);

    const handleCheckedAL= (e) =>{
        setFormAL({
            ...formAL,
            [e.target.name]:e.target.checked,
        })
     }
    var numcheck = Object.values(formAL).filter(verd => verd === true).length;

    return(
        <>
        <div class = "container">
        <h5>¿Actualmente cuál es tu ocupación?</h5>

              <h7>Puedes seleccionar hasta tres casillas</h7>
              <form action="#"> 


            <label >
            <input type="checkbox" id="Acti_Lab" name="Emp_sec_pri" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Emp_sec_pri===false 	|| !formAL.Emp_sec_pri )} />
             <span>Emplead@ en el sector privado</span>
            </label>
            <br/>

            <label >
            <input type="checkbox" id="Acti_Lab" name="Emp_sec_pub" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Emp_sec_pub===false || !formAL.Emp_sec_pub ) }/>
            <span>Emplead@ en el sector público</span>
           </label>

            <br/>
             <label>
            <input type="checkbox" id="Acti_Lab" name="Estudiante" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Estudiante===false || !formAL.Estudiante) }/>
           <span>Estudiante</span>
           </label>
            <br/>

            <label>
            <input type="checkbox" id="Acti_Lab" name="Des_Pen" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Des_Pen===false  || !formAL.Des_Pen)}/>
            <span>Desemplead@ / Pensionad@</span>
           </label>
            <br/>

             <label>
            <input type="checkbox" id="Acti_Lab" name="Emp_inf" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Emp_inf===false  || !formAL.Emp_inf)}/>
             <span>Emplead@ informal</span>
           </label>
            <br/> 

            <label>
            <input type="checkbox" id="Acti_Lab" name="Trab_dom" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Trab_dom===false || !formAL.Trab_dom)}/>
           <span>Trabajo doméstico y/o de cuidado</span>
           </label>
            <br/>  

            <label>
            <input type="checkbox" id="Acti_Lab" name="Neg_part" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Neg_part===false || !formAL.Neg_part)}/>
            <span>Negocio propio y/o familiar</span>
            </label>
            <br/>   

            <label>
            <input type="checkbox" id="Acti_Lab" name="Freelancer" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Freelancer===false || !formAL.Freelancer)}/>
            <span>Freelancer</span>
            </label>
            <br/>  

            <label>
            <input type="checkbox" id="Acti_Lab" name="Docen_Acad" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Docen_Acad===false || !formAL.Docen_Acad)}/>
            <span>Docencia / Academía</span>
            </label>
            </form>
            </div>
        </>
    ); 
}

