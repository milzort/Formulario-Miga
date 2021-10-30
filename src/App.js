
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import React, {useEffect,useState,createContext, useContext} from 'react';
import {DataAR} from './Componentes/Data_act_rec';
import {DataAL} from './Componentes/Data_act_lab';
import {DataPP} from './Componentes/Data_parti';
import Dat_per_1 from './Componentes/Dat_pers_1';
import Dat_per_2 from './Componentes/Dat_pers_2';
import Dat_per_3 from './Componentes/Dat_pers_3';
import Dat_per_4 from './Componentes/Dat_pers_4';
import {Activ_5} from './Componentes/Actividad_5';
import {Activ_6} from './Componentes/Actividad_6';
import Dat_parti_1 from './Componentes/Particip_1';
import { Activ_1 } from './Componentes/Actividad_1';
import { Activ_2 } from './Componentes/Actividad_2';
import { Activ_3 } from './Componentes/Actividad_3';
import { Activ_4 } from './Componentes/Actividad_4';
import Dat_parti_4 from './Componentes/Particip_4';
import Dat_parti_5 from './Componentes/Particip_5';
import Dat_parti_2 from './Componentes/Particip_2';
import M from "materialize-css";




function App() {
   
  useEffect(() => { M.AutoInit();}, []) 

  const [cont_DatPer,setCont_DatPer]= useState(1);

  const Next_DatPer = () =>{if(cont_DatPer<4){
    setCont_DatPer(cont_DatPer +1 )}else{
      setCont_DatPer(4)
    }
  };
  const Back_DatPer = () =>{if(cont_DatPer>1){
    setCont_DatPer(cont_DatPer- 1 )}else{
      setCont_DatPer(1)
    }
  };
console.log(cont_DatPer)



const [cont_DatAct,setCont_DatAct]= useState(1);

  const Next_DatAct = () =>{if(cont_DatAct<6){
    setCont_DatAct(cont_DatAct +1 )}else{
      setCont_DatAct(6)
    }
  };
  const Back_DatAct = () =>{if(cont_DatAct>1){
    setCont_DatAct(cont_DatAct- 1 )}else{
      setCont_DatAct(1)
    }
  };


  const [cont_DatPart,setCont_DatPart]= useState(1);

  const Next_DatPart = () =>{if(cont_DatPart<4){
    setCont_DatPart(cont_DatPart +1 )}else{
      setCont_DatPart(4)
    }
  };
  const Back_DatPart = () =>{if(cont_DatPart>1){
    setCont_DatPart(cont_DatPart- 1 )}else{
      setCont_DatPart(1)
    }
  };







  return (
    <div className="App">


      <header className="App-header">
      <section>
        <h1>Formulario migala</h1>
        </section>  

      </header>
      <body>
      <section>
      <div class = "container">
      <ul class="collapsible">
      
      <li>
      <div class="collapsible-header">Datos Generales               1/3</div>
      <div class="collapsible-body">
         { cont_DatPer===1 &&(
                <Dat_per_1/>
         ) }   

          { cont_DatPer===2 &&(
                 <Dat_per_2/>
           ) }   
              { cont_DatPer===3 &&(
            <Dat_per_3/>
           ) }   
              { cont_DatPer===4 &&(
            <Dat_per_4/>  
           ) }   
  
           <a class="waves-effect waves-light btn" onClick ={Back_DatPer}>Anterior</a>
          <a class="waves-effect waves-light btn" onClick = {Next_DatPer}>Siguiente</a>
          </div>
          </li>
        
          
          
        <li>
        <div class="collapsible-header">Actividades               2/3</div>
        <div class="collapsible-body">
        <DataAL>
          { cont_DatAct===1 &&(<Activ_1/>)}
          
          { cont_DatAct===2 &&(<Activ_2/>)}
           
          { cont_DatAct===3 &&( <Activ_3/>)}      
         
          { cont_DatAct===4 &&(<Activ_4/>)}        
          </DataAL>

          <DataAR>
          { cont_DatAct===5 &&(<Activ_5/>)}
          { cont_DatAct===6 &&( <Activ_6/>)}
          </DataAR>
          <a class="waves-effect waves-light btn" onClick ={Back_DatAct}>Anterior</a>
          <a class="waves-effect waves-light btn" onClick = {Next_DatAct}>Siguiente</a>
          </div>
          </li>
      
          

        <li>
        <div class="collapsible-header">Participacion               3/3</div>
        <div class="collapsible-body">
          <DataPP>
          { cont_DatPart===1 &&( <Dat_parti_1/>)}
          
          { cont_DatPart===2 &&( <Dat_parti_2/>)}

          { cont_DatPart===3 &&( <Dat_parti_4/>)}
   
          { cont_DatPart===4 &&( <Dat_parti_5/>)}
       
          </DataPP>
          <br/>
          <a class="waves-effect waves-light btn" onClick ={Back_DatPart}>Anterior</a>
          <a class="waves-effect waves-light btn" onClick = {Next_DatPart}>Siguiente</a>
          <br/>
          </div>
          </li>
      </ul>
      </div>
      </section>

 

      </body>
    </div>
  );
}

export default App;
