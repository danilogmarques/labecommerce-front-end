// import { useState } from "react";
import { ContainerFiltro } from "./style";
// import planetas from "../../planetas.json";

const Filtro = ({ valorMin, valorMax, handleValorMin, handleValorMax }) => {

    return (
        <ContainerFiltro>
            <label htmlFor="valorMin">Valor Mínimo</label>
            <input 
                type="number"
                id="valorMin"
                value={valorMin}
                onChange={handleValorMin}
            />
            <label htmlFor="valorMax">Valor Máximo</label>
            <input 
                type="number"
                id="valorMax"
                value={valorMax}
                onChange={handleValorMax}
            />
        </ContainerFiltro>
    )
};

export default Filtro;