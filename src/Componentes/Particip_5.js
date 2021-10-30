import React, {useState,useContext} from 'react';
import {Patic_Proy} from '../Componentes/Data_parti';


 

export default function Dat_parti_5(){
    const {formPP,setFormPP}= useContext(Patic_Proy);
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
    
     if( !formPP.Tip_parti ||formPP.Tip_parti==="Parti_A"){
        var tatu_1 = false
        }else{
            var tatu_1 = true
        }

    return(
        <>
        
        <div class = "container">
        <h5>¿Qué tanto estás familiarizad@ con el manejo de tecnologías
                        de la información?</h5>
        <form>
        {/* fami tect */ }
        <label htmlFor= "FamTec_A" >
        <input type = "radio" 
            id="FamTec_A"  
            name="FamTec" 
            value="nada"
            onChange={handleChange}/>
            <span> nada </span> </label>
         
         {/* fami tect */ }
         <label htmlFor= "FamTec_B" >
         <input type = "radio" 
            id="FamTec_B"  
            name="FamTec" 
            value="muy_poco"
            onChange={handleChange}/>
            <span> muy poco  </span></label>
                
                 {/* fami tect */ }
        <label htmlFor= "FamTec_C" > 
        <input type = "radio" 
            id="FamTec_C"  
            name="FamTec" 
            value="medianamente"
            onChange={handleChange}/>
            <span> medianamente  </span></label>
               
            {/* fami tect */ }
            <label htmlFor= "FamTec_D" >
            <input type = "radio" 
            id="FamTec_D"  
            name="FamTec" 
            value="bien"
            onChange={handleChange}/>
            <span>  bien  </span></label>
                
            {/* fami tect */ }
            <label htmlFor= "FamTec_E" >
            <input type = "radio" 
            id="FamTec_E"  
            name="FamTec" 
            value="muy_bien"
            onChange={handleChange}/>
            <span> muy bien  </span></label>
                   
           </form>

    {tatu_1 ? (
    <>
        <h5>¿Cuáles de estas aplicaciones o redes de comunicación usas más?</h5>

        <form>
       
            <label>
            <input type="checkbox" id="red_com" name="Discord" 
            onChange={handleChecked}  disabled={formPP.Ninguna === true}/>
            <span>Discord</span></label>
            <br/>

            <label>
            <input type="checkbox" id="red_com" name="Zoom" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <span>Zoom</span></label>
            <br/>

             <label>
            <input type="checkbox" id="red_com" name="Goog_meets" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <span>Google meet</span></label>
            <br/>

            <label>
            <input type="checkbox" id="red_com" name="Jitsi" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <span>Jitsi</span></label>
            <br/>

            <label>
            <input type="checkbox" id="red_com" name="Faceb_mess" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <span>Facebook messenger</span></label>
            <br/>

            <label>
            <input type="checkbox" id="red_com" name="Whatsapp" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <span>Whatsapp</span></label>
            <br/>

            <label>
            <input type="checkbox" id="red_com" name="Telegram" 
            onChange={handleChecked} disabled={formPP.Ninguna === true}/>
            <span>Telegram</span></label>
            <br/>

            <label>
            <input type="checkbox" id="red_com" name="Ninguna" 
            onChange={handleChecked} />
            <span>Ninguna</span></label>
            <br/>
            </form>
            </>
            ):(
            <>
            <h5>¿Cuáles redes sociales ocupas mas usas más?</h5>
         <h6>Puedes seleccionar hasta 2 casillas</h6>
       <form>
       <br/>
       <label>
       <input type="checkbox" id="red_soc" name="Facebook" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Facebook===false || !formPP_aux1.Facebook )}/>
       <span>Facebook</span></label><br/>

       <label>
       <input type="checkbox" id="red_soc" name="Whatsapp_RS" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Whatsapp_RS===false || !formPP_aux1.Whatsapp_RS )}/>
       <span>Whatsapp</span></label><br/>

       <label>
       <input type="checkbox" id="red_soc" name="Telegram_RS" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Telegram_RS===false || !formPP_aux1.Telegram_RS )}/>
       <span>Telegram</span></label>
       <br/>

       <label>
       <input type="checkbox" id="red_soc" name="Instagram" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Instagram===false || !formPP_aux1.Instagram )}/>
       <span>Instagram</span></label>
       <br/>

       <label>
       <input type="checkbox" id="red_soc" name="Tik_tok" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Tic_toc===false || !formPP_aux1.Tic_toc )}/>
       <span>Tik-Tok</span></label>
       <br/>

       <label>
       <input type="checkbox" id="red_soc" name="Twitter" 
       onChange={handleChecked_B} disabled={numcheck>1 && (formPP_aux1.Twitter===false || !formPP_aux1.Twitter )}/>
       <span>Twitter</span></label>
       <br/>
       </form>
    </>
       )}

    </div>
        </>
    ); 
}

