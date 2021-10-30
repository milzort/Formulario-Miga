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
        <h2>¿Actualmente cuál es tu ocupación?</h2>

              <h4>Puedes seleccionar hasta tres casillas</h4>
       
            <label htmlFor="Acti_Lab">Emplead@ en el sector privado</label>
            <input type="checkbox" id="Acti_Lab" name="Emp_sec_pri" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Emp_sec_pri===false 	|| !formAL.Emp_sec_pri )} />
            <br/>
            <label htmlFor="Acti_Lab">Emplead@ en el sector público</label>
            <input type="checkbox" id="Acti_Lab" name="Emp_sec_pub" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Emp_sec_pub===false || !formAL.Emp_sec_pub ) }/>
            <br/>
             <label htmlFor="Acti_Lab">Estudiante</label>
            <input type="checkbox" id="Acti_Lab" name="Estudiante" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Estudiante===false || !formAL.Estudiante) }/>
            <br/>
            <label htmlFor="Acti_Lab">Desemplead@ / Pensionad@</label>
            <input type="checkbox" id="Acti_Lab" name="Des_Pen" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Des_Pen===false  || !formAL.Des_Pen)}/>
            <br/>
             <label htmlFor="Acti_Lab">Emplead@ informal</label>
            <input type="checkbox" id="Acti_Lab" name="Emp_inf" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Emp_inf===false  || !formAL.Emp_inf)}/>
            <br/>   
            <label htmlFor="Acti_Lab">Trabajo doméstico y/o de cuidado</label>
            <input type="checkbox" id="Acti_Lab" name="Trab_dom" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Trab_dom===false || !formAL.Trab_dom)}/>
            <br/>   
            <label htmlFor="Acti_Lab">Negocio propio y/o familiar</label>
            <input type="checkbox" id="Acti_Lab" name="Neg_part" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Neg_part===false || !formAL.Neg_part)}/>
            <br/>   
            <label htmlFor="Acti_Lab">Freelancer</label>
            <input type="checkbox" id="Acti_Lab" name="Freelancer" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Freelancer===false || !formAL.Freelancer)}/>
            <br/>   
            <label htmlFor="Acti_Lab">Docencia / Academía</label>
            <input type="checkbox" id="Acti_Lab" name="Docen_Acad" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAL.Docen_Acad===false || !formAL.Docen_Acad)}/>
        </>
    ); 
}

