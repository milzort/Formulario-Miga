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

     if( !formPP.Tip_parti ||formPP.Tip_parti=="Parti_A"){
        var tatu_1 = false
        }else{
            var tatu_1 = true
        }

        if(formPP.Tip_parti=="Parti_B"){
            var tatu_2 = false
            }else{
                var tatu_2 = true
            }

    console.log(tatu_1)
    console.log(tatu_2)

    return(

        tatu_1 ? (
        <>
        <h2>¿A qué actividades podrías integrarte?</h2>
        <h5>Puedes seleccionar hasta tres casillas</h5>
       
        <label htmlFor="Acti_Proy">Grupos de discusión de temas específicos</label>
            <input type="checkbox" id="Acti_Proy" name="Gpo_dis" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Gpo_dis===false || !formPP_aux.Gpo_dis )} />
            <br/>
            
            <label htmlFor="Acti_Proy">Labores de organización en línea</label>
            <input type="checkbox" id="Acti_Proy" name="Org_lin" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Org_lin===false || !formPP_aux.Org_lin )} />
            <br/>

            <label htmlFor="Acti_Proy">Diseño y/o comunicación</label>
            <input type="checkbox" id="Acti_Proy" name="Dis_Com" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Dis_Com===false || !formPP_aux.Dis_Com )} />
            <br/>

            <label htmlFor="Acti_Proy">Desarrollo web</label>
            <input type="checkbox" id="Acti_Proy" name="Des_web" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Des_web===false || !formPP_aux.Des_web )} />
            <br/>

            <label htmlFor="Acti_Proy">Labores administrativas</label>
            <input type="checkbox" id="Acti_Proy" name="Lab_admi" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Lab_admi===false || !formPP_aux.Lab_admi )} />
            <br/>

            <label htmlFor="Acti_Proy">Redacción de documentos legales</label>
            <input type="checkbox" id="Acti_Proy" name="Reda_doc" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Reda_doc===false || !formPP_aux.Reda_doc )} />
            <br/>

            <label htmlFor="Acti_Proy">Difusión y promoción</label>
            <input type="checkbox" id="Acti_Proy" name="Dif_prom" 
            onChange={handleChecked} disabled={numcheck>2 && (formPP_aux.Dif_prom===false || !formPP_aux.Dif_prom )} />
            <br/>

        {tatu_2 &&(  
            <><label htmlFor="Acti_Proy">Organización de eventos públicos</label><input type="checkbox" id="Acti_Proy" name="Org_even"
                        onChange={handleChecked} disabled={numcheck > 2 && (formPP_aux.Org_even === false || !formPP_aux.Org_even)} />
            <br />

             <label htmlFor="Acti_Proy">Organización de asambleas</label><input type="checkbox" id="Acti_Proy" name="Org_asam"
                            onChange={handleChecked} disabled={numcheck > 2 && (formPP_aux.Org_asam === false || !formPP_aux.Org_asam)} />
            <br/>

            <label htmlFor="Acti_Proy">Trámites frente a gobierno</label><input type="checkbox" id="Acti_Proy" name="Tram_gob"
                                onChange={handleChecked} disabled={numcheck > 2 && (formPP_aux.Tram_gob === false || !formPP_aux.Tram_gob)} />
            <br />

            <label htmlFor="Acti_Proy">Organización territorial y visita domiciliaria</label><input type="checkbox" id="Acti_Proy" name="OrgT_Vist"
                                    onChange={handleChecked} disabled={numcheck > 2 && (formPP_aux.OrgT_Vist === false || !formPP_aux.OrgT_Vist)} />
            <br />
            </>
                )}

           <br /> <br />
            <h2>¿Cuántas horas podrías dedicarle a la semana
                          a dichas actividades?</h2>

             {/* Tiempo */ }
            <input type = "radio" 
            id="Tie_2_4"  
            name="Tiemp_Parti" 
            value="Tie_2_4"
            onChange={handleChange}/>
            <label htmlFor= "Tie_2_4" > de 2 a 4 horas </label>
           
            {/* Genero 2 */ }
            <input type = "radio" 
            id="Tie_4_8"  
            name="Tiemp_Parti" 
            value="Tie_4_8"
            onChange={handleChange}/>
            <label htmlFor= "Tie_4_8" > de 4 a 8 horas</label>
                                      
            {/* Genero 3 */ }
            <input type = "radio"
             id="Tie_8_12"  
             name="Tiemp_Parti" 
            value="Tie_8_12"
            onChange={handleChange}/>
            <label htmlFor= "Tie_8_12" > de 8 a 12 horas </label>
                                     
            {/* Genero 3 */ }
            <input type = "radio"
             id="Tie_12_16"  
             name="Tiemp_Parti" 
            value="Tie_12_16"
            onChange={handleChange}/>
            <label htmlFor= "Tie_12_16" > de 12 a 16 horas </label>
                                   
            {/* Genero 3 */ }
            <input type = "radio"
             id="Tie_16_mas"  
             name="Tiemp_Parti" 
            value="Tie_16_mas"
            onChange={handleChange}/>
            <label htmlFor= "Tie_16_mas" > más de 16 horas</label>
                    
        </>
        ):(
            <>
            <h3>Ya casi terminamos 
                Gracias por tu tiempo</h3>
            </>
        )
    ); 
}

