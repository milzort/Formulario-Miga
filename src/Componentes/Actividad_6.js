import React, {useState,createContext, useContext} from 'react';
import {Act_Rec} from '../Componentes/Data_act_rec';
const datos_3 = require('../helpers/act_extr.json');

export function Activ_6(){

    const {formAR,setFormAR} = useContext(Act_Rec);

     const handleCheckedAR= (e) =>{
       
        setFormAR({
            ...formAR,
            [e.target.name]:e.target.value,
        })
        
     } 

    return(
        <>
        {formAR.Artisticas &&(
            
            <><p>¿En qué tipo de actividad artística participas?</p><select name="Tip_Artisticas" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[0].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

        {formAR.Deportivas &&(
            
            <><p>¿Qué clase de actividad deportiva practicas?</p><select name="Tip_Deportivas" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[1].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }
        
        {formAR.Politicas &&(
            
            <><p>¿Cúal es el tipo de organización política en la que formas parte?</p><select name="Tip_Politicas" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[2].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }
            
            {formAR.Ong &&(
            
            <><p>¿Qué tipo de ONG pertenrces?</p><select name="Tip_Ong" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[3].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

            {formAR.Gpo_ayud &&(
            
            <><p>¿Qué tipo de grupo de ayuda apoyas?</p><select name="Tip_Gpo_ayud" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[4].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) }

            {formAR.Labor_com &&(
            
            <><p>¿Qué tipo de labor comunitaria realizas?</p><select name="Tip_Labor_com" 
            onChange={handleCheckedAR} >
                <option value = "">Selecciona alguna opción</option>
               {
                    
                    datos_3.Actividades[5].Actividad.map((el,i)=><option key={i}  value={el}>{el}</option>)
                } 
                </select>
                <br />
                </>
        ) } 
     </>
    )

}