import M from "materialize-css";
import React, { useEffect, useState } from 'react';
const datos = require('../helpers/estados.json');




function Dat_per_2() {
    

    useEffect(() => { M.AutoInit();}, []) 


    const [sel_Estado, setSelEstado] = useState("");
    const [sel_Municipios, setSelMuni] = useState("");
    const [form, setForm] = useState({});



    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeEst = (e) => {
        setSelEstado(
            e.target.value
        );

    };

    const handleChangeMuni = (e) => {
        setSelMuni(
            e.target.value
        );

    };

    sel_Estado && (
    console.log(datos.Estados[datos.Estados.findIndex(masc => masc.Estado === sel_Estado)].Municipios))

    return (
        <div>
            <h5>¿Donde vives actualmente?</h5>

            <div class="input-field col s12">
                <select name="Estado" id="Estado" onChange={handleChangeEst}>
                    <option value="">Selecciona tu Estado</option>
                    {datos.Estados.map((el, i) => <option key={i} value={el.Estado}>{el.Estado}</option>)}
                </select>
            </div>


            <br />
            <br />

            <div class="input-field col s11">
                <select name="Municipio" id="Municipio" onChange={handleChangeMuni}>
                    <option value="">Selecciona tu Municipio/Alcaldía</option>
                    {sel_Estado && (
                        datos.Estados[datos.Estados.findIndex(masc => masc.Estado === sel_Estado)].Municipios.map((el, i) => <option key={i} value={el}>{el}</option>)
                    )}
                </select>
            </div>

            <h5>Si lo deseas compártenos tu código postal</h5>


            <input type="text" id="Cod_Post" name="Cod_Post"
                value={form.name}
                onChange={handleChange}
                placeholder="Código Postal" />
            <br />

        </div>



    );
}


export default Dat_per_2;
