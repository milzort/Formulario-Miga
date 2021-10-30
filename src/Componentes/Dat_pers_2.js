import M from "materialize-css";
import {Dat_gen} from '../Componentes/Data_act_gen';
import React, { useEffect, useState,useContext } from 'react';
const datos = require('../helpers/estados.json');




function Dat_per_2() {
    

    useEffect(() => { M.AutoInit();}, []) 


    const [sel_Estado, setSelEstado] = useState("");
    const [sel_Municipios, setSelMuni] = useState("");
    const {formDG,setFormDG}= useContext(Dat_gen);



    const handleChange = (e) => {
        setFormDG({
            ...formDG,
            [e.target.name]: e.target.value,
        });

    };

    const handleChangeEst = (e) => {
        setSelEstado(
            e.target.value
        );
        setFormDG({
            ...formDG,
            ["Estado"]:e.target.value,
        }); 

    };

    const handleChangeMuni = (e) => {
        setSelMuni(
            e.target.value
        );
        setFormDG({
            ...formDG,
            ["Municipio"]:e.target.value,
        }); 

    };

    sel_Estado && (
    console.log(datos.Estados[datos.Estados.findIndex(masc => masc.Estado === sel_Estado)].Municipios))

    return (
       <div class = "container">

        <div>
            <h5>¿Donde vives actualmente?</h5>

            
                <select class = "browser-default" name="Estado" id="Estado" onChange={handleChangeEst}>
                    <option value="">Selecciona tu Estado</option>
                    {datos.Estados.map((el, i) => <option key={i} value={el.Estado}>{el.Estado}</option>)}
                </select>
           


            <br />
            <br />

          
                <select class = "browser-default" name="Municipio" id="Municipio" onChange={handleChangeMuni}>
                    <option value="">Selecciona tu Municipio/Alcaldía</option>
                    {sel_Estado && (
                        datos.Estados[datos.Estados.findIndex(masc => masc.Estado === sel_Estado)].Municipios.map((el, i) => <option key={i} value={el}>{el}</option>)
                    )}
                </select>
            

            <h5>Si lo deseas compártenos tu código postal</h5>


            <input type="text" id="Cod_Post" name="Cod_Post"
                value={formDG.name}
                onChange={handleChange}
                placeholder="Código Postal" />
            <br />

        </div>

        </div>


    );
}


export default Dat_per_2;
