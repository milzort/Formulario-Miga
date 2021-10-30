import React, {useState,useContext} from 'react';
import {Patic_Proy} from '../Componentes/Data_parti';


export default function Dat_parti_4(){
    const {setFormPP,formPP}= useContext(Patic_Proy);

    const handleChecked= (e) =>{
       
        setFormPP({
            
            ...formPP,
            [e.target.name]:e.target.checked,
        })
        
     }
    

    return(
        <>
        <div class = "container">
        <h5>Nuestra forma de organización digital requiere
     que tengamos la capacidad para que estemos todos conectad@s
                      ¿cuentas con lo siguiente?</h5>
        <form> 
            <label>
            <input type="checkbox" id="Serv_int" name="Serv_Int_cas" 
            onChange={handleChecked}  />
            <span>Servicio de internet en casa</span>
            </label>
            <br/>

            <label>
            <input type="checkbox" id="Serv_int" name="Serv_Dat_mov" 
            onChange={handleChecked} />
            <span>Servicio de datos móbiles</span></label>
            <br/>

             <label >
            <input type="checkbox" id="Serv_int" name="Serv_Cel_int" 
            onChange={handleChecked} />
            <span>Teléfono celular con conexión a internet</span></label>
            <br/>

            <label>
            <input type="checkbox" id="Serv_int" name="Serv_Lap_comp" 
            onChange={handleChecked} />
            <span>Laptop o computadora de escritorio</span></label>
            <br/>

        </form> 
        </div>
        </>
    ); 
}

