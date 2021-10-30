import React, {useState,Component} from 'react';


export default function Dat_per_3(){
    const[form,setForm] = useState({});
    const [fech_nam, setFech_Nam] = useState(new Date());

    const handleChange= (e) =>{
       setForm({
           ...form,
           [e.target.name]:e.target.value,
       }); 
    } 




    return(
        <>
        <h2>Ahora sí, saca tu credencial de elector
recuerda que este campo es opcional,
si decides ponerlo nos ayudas a saber
dónde tenemos presencia y validar tu información.
Si aún no cumples 18 años no te preocupes
déjalo vacío.</h2>

           
            <input type= "text" id="C_E" name="C_E" 
            value={form.name} 
            onChange={handleChange}
            placeholder="Clave de Elector"/>
       <br/>
       <br/>
       <input type= "text" id="D_E" name="D_E" 
            value={form.name} 
            onChange={handleChange}
            placeholder="Distrito Electoral"/>
        <br/>
        
        </>
    ); 
}