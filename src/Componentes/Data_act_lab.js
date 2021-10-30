import React,{ createContext, useState} from "react";

export const Act_Lab =  createContext();

 export const DataAL = ({children})=>{
    const[formAL,setFormAL] = useState({});



    return(
        <Act_Lab.Provider  value={{formAL,setFormAL}}>
            {children}
        </Act_Lab.Provider>
    )
 }