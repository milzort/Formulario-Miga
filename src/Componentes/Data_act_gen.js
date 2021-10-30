import React,{ createContext, useState} from "react";

export const Dat_gen =  createContext();

 export const DataGen = ({children})=>{
    const[formDG,setFormDG] = useState({});



    return(
        <Dat_gen.Provider  value={{formDG,setFormDG}}>
            {children}
        </Dat_gen.Provider>
    )
 }