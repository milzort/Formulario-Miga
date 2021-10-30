import React, {useState,useContext} from 'react';
import {Patic_Proy} from '../Componentes/Data_parti';


export default function Dat_parti_2(){
    const {setFormPP,formPP}= useContext(Patic_Proy);
    const[formPP_aux,setFormPP_aux] = useState({});

    const handleChecked= (e) =>{
       
        setFormPP({
            
            ...formPP,
            [e.target.name]:e.target.checked,
        });
        setFormPP_aux({
            
            ...formPP_aux,
            [e.target.name]:e.target.checked,
        })
        
     }

     const handleChange= (e) =>{
        setFormPP({
           ...formPP,
           [e.target.name]:e.target.value,
       }); 
    } 
    
     var numcheck = Object.values(formPP_aux).filter(verd => verd === true).length;

     if( !formPP.Tip_parti ||formPP.Tip_parti==="Parti_A"){
        var tatu_1 = false
        }else{
            var tatu_1 = true
        }

        if(formPP.Tip_parti==="Parti_B"){
            var tatu_2 = false
            }else{
                var tatu_2 = true
            }



    return(
        
        tatu_1 ? (
        <>
        <div class = "container">
        <h5>¿A qué actividades podrías integrarte?</h5>
        <h3>Puedes seleccionar hasta tres casillas</h3>
        <form> 

            <label>
            <input type="checkbox" id="Acti_Proy" name="Gpo_dis" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Gpo_dis===false || !formPP_aux.Gpo_dis )} />
            <span>Grupos de discusión de temas específicos</span>
            </label>
            <br/>
            
            <label>
            <input type="checkbox" id="Acti_Proy" name="Org_lin" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Org_lin===false || !formPP_aux.Org_lin )} />
            <span>Labores de organización en línea</span>
            </label>
            <br/>

            <label>
            <input type="checkbox" id="Acti_Proy" name="Dis_Com" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Dis_Com===false || !formPP_aux.Dis_Com )} />
            <span>Diseño y/o comunicación</span>
            </label>
            <br/>

            <label>
            <input type="checkbox" id="Acti_Proy" name="Des_web" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Des_web===false || !formPP_aux.Des_web )} />
            <span>Desarrollo web</span>
            </label>
            <br/>

            <label>
            <input type="checkbox" id="Acti_Proy" name="Lab_admi" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Lab_admi===false || !formPP_aux.Lab_admi )} />
            <span>Labores administrativas</span>
            </label>
            <br/>

            <label>
            <input type="checkbox" id="Acti_Proy" name="Reda_doc" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Reda_doc===false || !formPP_aux.Reda_doc )} />
            <span>Redacción de documentos legales</span>
            </label>
            <br/>

            <label >
            <input type="checkbox" id="Acti_Proy" name="Dif_prom" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Dif_prom===false || !formPP_aux.Dif_prom )} />
            <span>Difusión y promoción</span>
            </label>
            <br/>
            </form>
        
        {tatu_2 &&(  
            <form>  
            <>
            <label>
            <input type="checkbox" id="Acti_Proy" name="Org_even"
                        onChange={handleChecked} disabled={numcheck > 2 && (formPP_aux.Org_even === false || !formPP_aux.Org_even)} />
            <span>Organización de eventos públicos</span>
            </label>
            <br />

            <label>
            <input type="checkbox" id="Acti_Proy" name="Org_asam"
                            onChange={handleChecked} disabled={numcheck > 2 && (formPP_aux.Org_asam === false || !formPP_aux.Org_asam)} />
            <span>Organización de asambleas</span>
            </label>
            <br/>

            <label>
            <input type="checkbox" id="Acti_Proy" name="Tram_gob"
                                onChange={handleChecked} disabled={numcheck > 2 && (formPP_aux.Tram_gob === false || !formPP_aux.Tram_gob)} />
             <span>Trámites frente a gobierno</span>
            </label>
            <br />

            <label>
            <input type="checkbox" id="Acti_Proy" name="OrgT_Vist"
                                    onChange={handleChecked} disabled={numcheck > 2 && (formPP_aux.OrgT_Vist === false || !formPP_aux.OrgT_Vist)} />
           <span>Organización territorial y visita domiciliaria</span></label>
            <br />
            
            </>
            </form>   )}

           <br /> <br />
            <h5>¿Cuántas horas podrías dedicarle a la semana
                          a dichas actividades?</h5>
            <form>         
         
             {/* Tiempo */ }
            <label htmlFor= "Tie_2_4" >
            <input type = "radio" 
            id="Tie_2_4"  
            name="Tiemp_Parti" 
            value="Tie_2_4"
            onChange={handleChange}/>
            <span> de 2 a 4 horas  </span></label>
           
            {/* Genero 2 */ }
            <label htmlFor= "Tie_4_8" >
            <input type = "radio" 
            id="Tie_4_8"  
            name="Tiemp_Parti" 
            value="Tie_4_8"
            onChange={handleChange}/>
            <span> de 4 a 8 horas  </span></label>
                                      
            {/* Genero 3 */ 
            }<label htmlFor= "Tie_8_12" >
            <input type = "radio"
             id="Tie_8_12"  
             name="Tiemp_Parti" 
            value="Tie_8_12"
            onChange={handleChange}/>
            <span> de 8 a 12 horas  </span></label>
                                     
            {/* Genero 3 */ }
            <label htmlFor= "Tie_12_16" >
            <input type = "radio"
             id="Tie_12_16"  
             name="Tiemp_Parti" 
            value="Tie_12_16"
            onChange={handleChange}/>
            <span> de 12 a 16 horas  </span></label>
                                   
            {/* Genero 3 */ }
            <label htmlFor= "Tie_16_mas" >
            <input type = "radio"
             id="Tie_16_mas"  
             name="Tiemp_Parti" 
            value="Tie_16_mas"
            onChange={handleChange}/>
            <span> más de 16 horas  </span></label>
            </form>  
         </div> 
             
           
        </>
       
        ):(
            <>
            <div class = "container">
            <h3>Ya casi terminamos </h3>
            <h3> Gracias por tu tiempo</h3>
            </div>
            </>
        )
        
      
         ); 
}

