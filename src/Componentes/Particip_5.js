import React, {useState,useContext} from 'react';
import {Patic_Proy} from '../Componentes/Data_parti';


 

export default function Dat_parti_5(){
    const {setFormPP,formPP}= useContext(Patic_Proy);
    const[formPP_aux1,setFormPP_aux1] = useState({});

    const handleChecked= (e) =>{
       
        setFormPP({
            
            ...formPP,
            [e.target.name]:e.target.checked,
        })
        
     }

     const handleChecked_B= (e) =>{
       
        setFormPP_aux1({
            
            ...formPP_aux1,
            [e.target.name]:e.target.checked,
        })
        
     }


     const handleChange= (e) =>{
       
        setFormPP({
            
            ...formPP,
            [e.target.name]:e.target.value,
        })
        
     }
    
     
     var numcheck = Object.values(formPP_aux1).filter(verd => verd === true).length;
    
     if( !formPP.Tip_parti ||formPP.Tip_parti=="Parti_A"){
        var tatu_1 = false
        }else{
            var tatu_1 = true
        }

    return(
        <>
        <h2>¿Qué tanto estás familiarizad@ con el manejo de tecnologías
                        de la información?</h2>
        
        {/* fami tect */ }
        <input type = "radio" 
            id="FamTec_A"  
            name="Tip_parti" 
            value="nada"
            onChange={handleChange}/>
            <label htmlFor= "FamTec_A" > nada  </label>
         
         {/* fami tect */ }
         <input type = "radio" 
            id="FamTec_B"  
            name="Tip_parti" 
            value="muy_poco"
            onChange={handleChange}/>
            <label htmlFor= "FamTec_B" > muy poco  </label>
                
                 {/* fami tect */ }
        <input type = "radio" 
            id="FamTec_C"  
            name="Tip_parti" 
            value="medianamente"
            onChange={handleChange}/>
            <label htmlFor= "FamTec_C" > medianamente  </label>
               
                {/* fami tect */ }
                <input type = "radio" 
            id="FamTec_D"  
            name="Tip_parti" 
            value="bien"
            onChange={handleChange}/>
            <label htmlFor= "FamTec_D" > bien  </label>
                
                {/* fami tect */ }
                <input type = "radio" 
            id="FamTec_E"  
            name="Tip_parti" 
            value="muy_bien"
            onChange={handleChange}/>
            <label htmlFor= "FamTec_E" > muy bien  </label>
                   
           

    {tatu_1 ? (
    <>
        <h2>¿Cuáles de estas aplicaciones o redes de comunicación usas más?</h2>
       
            <label htmlFor="red_com">Discord</label>
            <input type="checkbox" id="red_com" name="Discord" 
            onChange={handleChecked}  disabled={formPP.Ninguna === true}/>
            <br/>
            <label htmlFor="red_com">Zoom</label>
            <input type="checkbox" id="red_com" name="Zoom" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <br/>
             <label htmlFor="red_com">Google meets</label>
            <input type="checkbox" id="red_com" name="Goog_meets" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <br/>
            <label htmlFor="red_com">Jitsi</label>
            <input type="checkbox" id="red_com" name="Jitsi" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <br/>
            <label htmlFor="red_com">Facebook messenger</label>
            <input type="checkbox" id="red_com" name="Faceb_mess" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <br/>
            <label htmlFor="red_com">Whatsapp</label>
            <input type="checkbox" id="red_com" name="Whatsapp" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <br/>
            <label htmlFor="red_com">Telegram</label>
            <input type="checkbox" id="red_com" name="Telegram" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <br/>
            <label htmlFor="red_com">Ninguna</label>
            <input type="checkbox" id="red_com" name="Ninguna" 
            onChange={handleChecked} />
            <br/>
            </>
            ):(
            <>
            <h2>¿Cuáles redes sociales ocupas mas usas más?</h2>
         <h5>Puedes seleccionar hasta 2 casillas</h5>

       <br/>
       <label htmlFor="red_soc">Facebook</label>
       <input type="checkbox" id="red_soc" name="Facebook" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Facebook===false || !formPP_aux1.Facebook )}/>
       <br/>
       <label htmlFor="red_soc">Whatsapp</label>
       <input type="checkbox" id="red_soc" name="Whatsapp_RS" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Whatsapp_RS===false || !formPP_aux1.Whatsapp_RS )}/>
       <br/>
       <label htmlFor="red_soc">Telegram</label>
       <input type="checkbox" id="red_soc" name="Telegram_RS" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Telegram_RS===false || !formPP_aux1.Telegram_RS )}/>
       <br/>

       <label htmlFor="red_soc">Instagram</label>
       <input type="checkbox" id="red_soc" name="Instagram" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Instagram===false || !formPP_aux1.Instagram )}/>
       <br/>

       <label htmlFor="red_soc">Tik-Tok</label>
       <input type="checkbox" id="red_soc" name="Tik_tok" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Tic_toc===false || !formPP_aux1.Tic_toc )}/>
       <br/>

       <label htmlFor="red_soc">Twitter</label>
       <input type="checkbox" id="red_soc" name="Twitter" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Twitter===false || !formPP_aux1.Twitter )}/>
       <br/>
    </>
       )}


        </>
    ); 
}

