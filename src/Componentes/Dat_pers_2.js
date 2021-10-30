import React, { useState } from 'react';
const datos = require('../helpers/estados.json');



function Dat_per_2() {

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

            <div class="input-field col s12">
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

<><script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script><script type="text/javascript" src="js/materialize.min.js"></script></>


document.addEventListener('DOMContentLoaded', function() {
	M.FormSelect.init(document.querySelector("select[name='Estado']"));
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
});




export default Dat_per_2;