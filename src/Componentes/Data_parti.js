import React,{ createContext, useState} from "react";


export const Patic_Proy =  createContext();

 export const DataPP = ({children})=>{
    const[formPP,setFormPP] = useState({});



    return(
        <Patic_Proy.Provider  value={{formPP,setFormPP}}>
            {children}
        </Patic_Proy.Provider>
    )
 }