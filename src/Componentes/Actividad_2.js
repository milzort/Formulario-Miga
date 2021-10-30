import 'materialize-css/dist/css/materialize.min.css';
import React, {useState,useContext} from 'react';
import {Dat_gen} from '../Componentes/Data_act_gen';


export function Activ_2(){
    const {formDG,setFormDG}= useContext(Dat_gen);
    const[formAc,setFormAc] = useState({});

    const handleCheckedAL= (e) =>{
        setFormAc({
            ...formAc,
            [e.target.name]:e.target.checked,
        })
        setFormDG({    
            ...formDG,
            [e.target.name]:e.target.checked,
        })
     }
    var numcheck = Object.values(formAc).filter(verd => verd === true).length;

    return(
        <>
        <div class = "container">
        <h5>¿Actualmente cuál es tu ocupación?</h5>

              <h7>Puedes seleccionar hasta tres casillas</h7>
              <form action="#"> 


            <label >
            <input type="checkbox" id="Acti_Lab" name="Emp_sec_pri" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAc.Emp_sec_pri===false 	|| !formAc.Emp_sec_pri )} />
             <span>Emplead@ en el sector privado</span>
            </label>
            <br/>

            <label >
            <input type="checkbox" id="Acti_Lab" name="Emp_sec_pub" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAc.Emp_sec_pub===false || !formAc.Emp_sec_pub ) }/>
            <span>Emplead@ en el sector público</span>
           </label>

            <br/>
             <label>
            <input type="checkbox" id="Acti_Lab" name="Estudiante" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAc.Estudiante===false || !formAc.Estudiante) }/>
           <span>Estudiante</span>
           </label>
            <br/>

            <label>
            <input type="checkbox" id="Acti_Lab" name="Des_Pen" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAc.Des_Pen===false  || !formAc.Des_Pen)}/>
            <span>Desemplead@ / Pensionad@</span>
           </label>
            <br/>

             <label>
            <input type="checkbox" id="Acti_Lab" name="Emp_inf" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAc.Emp_inf===false  || !formAc.Emp_inf)}/>
             <span>Emplead@ informal</span>
           </label>
            <br/> 

            <label>
            <input type="checkbox" id="Acti_Lab" name="Trab_dom" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAc.Trab_dom===false || !formAc.Trab_dom)}/>
           <span>Trabajo doméstico y/o de cuidado</span>
           </label>
            <br/>  

            <label>
            <input type="checkbox" id="Acti_Lab" name="Neg_part" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAc.Neg_part===false || !formAc.Neg_part)}/>
            <span>Negocio propio y/o familiar</span>
            </label>
            <br/>   

            <label>
            <input type="checkbox" id="Acti_Lab" name="Freelancer" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAc.Freelancer===false || !formAc.Freelancer)}/>
            <span>Freelancer</span>
            </label>
            <br/>  

            <label>
            <input type="checkbox" id="Acti_Lab" name="Docen_Acad" 
            onChange={handleCheckedAL} disabled={numcheck>2 && (formAc.Docen_Acad===false || !formAc.Docen_Acad)}/>
            <span>Docencia / Academía</span>
            </label>
            </form>
            </div>
        </>
    ); 
}

