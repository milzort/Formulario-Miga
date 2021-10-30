import React,{ createContext, useState} from "react";

export const Act_Rec =  createContext();

 export const DataAR = ({children})=>{
    const[formAR,setFormAR] = useState({});



    return(
        <Act_Rec.Provider  value={{formAR,setFormAR}}>
            {children}
        </Act_Rec.Provider>
    )
 }