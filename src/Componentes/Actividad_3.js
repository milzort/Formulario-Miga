import M from "materialize-css";
import React, { useContext} from 'react';
import {Dat_gen} from '../Componentes/Data_act_gen';
const datos_2 = require('../helpers/Trabajo.json');

export function Activ_3(){
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
        {formDG.Emp_sec_pri &&(
            
            <><p>¿Cual es el área de especialidad de tu trabajo en el sector privado?</p><select class = "browser-default" name="Tip_Emp_sec_pri" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                   
                    datos_2.Trabjo[0].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

        {formDG.Emp_sec_pub &&(
            
            <><p>¿En cual área del sector público trabajas?</p><select class = "browser-default" name="Tip_Emp_sec_pub" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                  
                    datos_2.Trabjo[1].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }
        
        {formDG.Estudiante &&(
            
            <><p>¿En qué nivel te encuentras estudiando actualmente?</p><select class = "browser-default" name="Tip_Estudiante" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                   
                    datos_2.Trabjo[2].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }
            
            {formDG.Des_Pen &&(
            
            <><p>¿Cuál es tu estatus actualmente?</p><select class = "browser-default" name="Tip_Des_Pen" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                    
                    datos_2.Trabjo[3].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

            {formDG.Emp_inf &&(
            
            <><p>¿En que tipo del sector informal participas?</p><select class = "browser-default" name="Tip_Emp_inf" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {               
                    datos_2.Trabjo[4].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

            {formDG.Trab_dom &&(
            
            <><p>¿Qué tipo de labor realizas como trabajo doméstico/cuidado?</p><select class = "browser-default" name="Tip_Trab_dom" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                   
                    datos_2.Trabjo[5].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) } 

            {formDG.Neg_part &&(
            
            <><p>¿En que tipo de negocio particular/familiar participas?</p><select class = "browser-default" name="Tip_Neg_part" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {                   
                    datos_2.Trabjo[6].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) } 

            {formDG.Freelancer &&(
            
            <><p>¿En qué área te especializas/ejerces como trabajador freelancer?</p><select class = "browser-default" name="Tip_Freelancer" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {
                    datos_2.Trabjo[7].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) } 

            {formDG.Docen_Acad &&(
            
            <><p>¿Cuál es tu área de actividad actualmente dentro de la docencia/academia?</p><select class = "browser-default" name="Tip_Docen_Acad" 
            onChange={handleCheckedAL} >
                <option value = "">Selecciona alguna opción</option>
               {
                    datos_2.Trabjo[8].Area.map((el,i)=><option key={i} value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) } 
        </div>
     </>
    )

}