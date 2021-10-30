
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import React, {useState,createContext, useContext} from 'react';
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




function App() {
   
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








  return (
    <div className="App">


      <header className="App-header">
      <section>
        <h1>Formulario migala</h1>
        </section>  

      </header>
      <body>
      <section>


          <Dat_per_1/>
          <hr/>
          <Dat_per_2/>
          <hr/>
          <Dat_per_3/>
          <hr/>
          <Dat_per_4/>      
          <hr/>
          <a class="waves-effect waves-light btn" onClick ={Back_DatPer}>Anterior</a>
          <a class="waves-effect waves-light btn" onClick = {Next_DatPer}>Siguiente</a>
          <hr/>
          <DataAL>
          <Activ_1/>
          <hr/> 
          <Activ_2/> 
          <hr/>           
          <Activ_3/>
          <hr/>           
          <Activ_4/>
          </DataAL>
          <hr/> 
          <DataAR>
          <Activ_5/>
          <hr/>
          <Activ_6/>
          </DataAR>
          <hr/>
          <DataPP>
          <Dat_parti_1/>
          <hr/>
          <Dat_parti_2/>
          <hr/>
          <Dat_parti_4/>
          <hr/>
          <Dat_parti_5/>
          </DataPP>
          <br/><br/>

        </section>

 

      </body>
    </div>
  );
}

export default App;
