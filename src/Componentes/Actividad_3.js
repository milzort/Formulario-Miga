import React, {useState,createContext, useContext} from 'react';
import {Act_Lab} from '../Componentes/Data_act_lab';
const datos_2 = require('../helpers/Trabajo.json');

export function Activ_3(){
    const {formAL,setFormAL}= useContext(Act_Lab);

    const handleCheckedAL= (e) =>{
       
        setFormAL({
            ...formAL,
            [e.target.name]:e.target.value,
        })
        
    }

    return(
        <>
        {formAL.Emp_sec_pri &&(
            
            <><p>¿Cual es el área de especialidad de tu trabajo en el sector privado?</p><select name="Tip_Emp_sec_pri" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                   
                    datos_2.Trabjo[0].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

        {formAL.Emp_sec_pub &&(
            
            <><p>¿En cual área del sector público trabajas?</p><select name="Tip_Emp_sec_pub" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                  
                    datos_2.Trabjo[1].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }
        
        {formAL.Estudiante &&(
            
            <><p>¿En qué nivel te encuentras estudiando actualmente?</p><select name="Tip_Estudiante" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                   
                    datos_2.Trabjo[2].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }
            
            {formAL.Des_Pen &&(
            
            <><p>¿Cuál es tu estatus actualmente?</p><select name="Tip_Des_Pen" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                    
                    datos_2.Trabjo[3].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

            {formAL.Emp_inf &&(
            
            <><p>¿En que tipo del sector informal participas?</p><select name="Tip_Emp_inf" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {               
                    datos_2.Trabjo[4].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

            {formAL.Trab_dom &&(
            
            <><p>¿Qué tipo de labor realizas como trabajo doméstico/cuidado?</p><select name="Tip_Trab_dom" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                   
                    datos_2.Trabjo[5].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) } 

            {formAL.Neg_part &&(
            
            <><p>¿En que tipo de negocio particular/familiar participas?</p><select name="Tip_Neg_part" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                   
                    datos_2.Trabjo[6].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) } 

            {formAL.Freelancer &&(
            
            <><p>¿En qué área te especializas/ejerces como trabajador freelancer?</p><select name="Tip_Freelancer" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {
                    datos_2.Trabjo[7].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) } 

            {formAL.Docen_Acad &&(
            
            <><p>¿Cuál es tu área de actividad actualmente dentro de la docencia/academia?</p><select name="Tip_Docen_Acad" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {
                    datos_2.Trabjo[8].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) } 
     </>
    )

}