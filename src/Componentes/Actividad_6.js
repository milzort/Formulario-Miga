import React, { useContext} from 'react';
import {Dat_gen} from '../Componentes/Data_act_gen';
const datos_3 = require('../helpers/act_extr.json');

export function Activ_6(){
    const {formDG,setFormDG}= useContext(Dat_gen);
    

     const handleCheckedAR= (e) =>{
       
        setFormDG({
            ...formDG,
            [e.target.name]:e.target.value,
        })
        
     } 

    return(
        <>
        <div class = "container">
        {formDG.Artisticas &&(
            
            <><p>¿En qué tipo de actividad artística participas?</p><select class = "browser-default" name="Tip_Artisticas" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[0].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

        {formDG.Deportivas &&(
            
            <><p>¿Qué clase de actividad deportiva practicas?</p><select class = "browser-default" name="Tip_Deportivas" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[1].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }
        
        {formDG.Politicas &&(
            
            <><p>¿Cúal es el tipo de organización política en la que formas parte?</p><select class = "browser-default" name="Tip_Politicas" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[2].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }
            
            {formDG.Ong &&(
            
            <><p>¿Qué tipo de ONG pertenrces?</p><select class = "browser-default" name="Tip_Ong" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[3].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

            {formDG.Gpo_ayud &&(
            
            <><p>¿Qué tipo de grupo de ayuda apoyas?</p><select class = "browser-default" name="Tip_Gpo_ayud" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[4].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

            {formDG.Labor_com &&(
            
            <><p>¿Qué tipo de labor comunitaria realizas?</p><select class = "browser-default" name="Tip_Labor_com" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[5].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) } 
        </div>
     </>
    )

}