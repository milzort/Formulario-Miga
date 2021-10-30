import React, {useState,createContext, useContext} from 'react';
import {Act_Rec} from '../Componentes/Data_act_rec';

 

export function Activ_5(){
    const {setFormAR,formAR}= useContext(Act_Rec);

    const handleCheckedAR= (e) =>{
       
        setFormAR({
            
            ...formAR,
            [e.target.name]:e.target.checked,
        })
        
     }
    var numcheck = Object.values(formAR).filter(verd => verd === true).length;

    return(
        <>
        <h2>¿En qué actividades participas
              que no son de trabajo?</h2>

              <h5>Puedes seleccionar hasta tres casillas</h5>
       
            <label htmlFor="Acti_Extr">Artísticas</label>
            <input type="checkbox" id="Acti_Extr" name="Artisticas" 
            onChange={handleCheckedAR} disabled={numcheck>2 && (formAR.Artisticas===false 	|| !formAR.Artisticas )} />
            <br/>
            <label htmlFor="Acti_Extr">Deportivas</label>
            <input type="checkbox" id="Acti_Extr" name="Deportivas" 
            onChange={handleCheckedAR} disabled={numcheck>2 && (formAR.Deportivas===false || !formAR.Deportivas ) }/>
            <br/>
             <label htmlFor="Acti_Extr">Políticas</label>
            <input type="checkbox" id="Acti_Extr" name="Politicas" 
            onChange={handleCheckedAR} disabled={numcheck>2 && (formAR.Politicas===false || !formAR.Politicas) }/>
            <br/>
            <label htmlFor="Acti_Extr">Ong, organizaciones sin fines de lucro</label>
            <input type="checkbox" id="Acti_Extr" name="Ong" 
            onChange={handleCheckedAR} disabled={numcheck>2 && (formAR.Ong===false  || !formAR.Ong)}/>
            <br/>
             <label htmlFor="Acti_Extr">Grupos de ayuda</label>
            <input type="checkbox" id="Acti_Extr" name="Gpo_ayud" 
            onChange={handleCheckedAR} disabled={numcheck>2 && (formAR.Gpo_ayud===false  || !formAR.Gpo_ayud)}/>
         <br/>   
            <label htmlFor="Acti_Extr">Labor comunitaria</label>
            <input type="checkbox" id="Acti_Extr" name="Labor_com" 
            onChange={handleCheckedAR} disabled={numcheck>2 && (formAR.Labor_com===false || !formAR.Labor_com)}/>
        </>
    ); 
}

