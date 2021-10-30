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
        <h2>Nuestra forma de organización digital requiere
     que tengamos la capacidad para que estemos todos conectad@s
                      ¿cuentas con lo siguiente?</h2>
       
            <label htmlFor="Serv_int">Servicio de internet en casa</label>
            <input type="checkbox" id="Serv_int" name="Serv_Int_cas" 
            onChange={handleChecked}  />
            <br/>
            <label htmlFor="Serv_int">Servicio de datos móbiles</label>
            <input type="checkbox" id="Serv_int" name="Serv_Dat_mov" 
            onChange={handleChecked} />
            <br/>
             <label htmlFor="Serv_int">Teléfono celular con conexión a internet</label>
            <input type="checkbox" id="Serv_int" name="Serv_Cel_int" 
            onChange={handleChecked} />
            <br/>
            <label htmlFor="Serv_int">Laptop o computadora de escritorio</label>
            <input type="checkbox" id="Serv_int" name="Serv_Lap_comp" 
            onChange={handleChecked} />
            <br/>

        </>
    ); 
}

