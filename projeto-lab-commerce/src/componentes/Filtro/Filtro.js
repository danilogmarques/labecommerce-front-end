import { useState } from "react";
import { ContainerFiltro } from "./style";
import planetas from "../../planetas.json";

const Filtro = ({ 
    valorMin, valorMax, setValorMin, setValorMax, planetasFiltrados}) => {

         const handleChangeMin = (e) => {
        const valor = e.target.value;
        if (valor === "" || Number(valor) >= 0) {
            setValorMin(valor);
        }
    };

    const handleChangeMax = (e) => {
        const valor = e.target.value;
        if (valor === "" || Number(valor) >= 0) {
            setValorMax(valor);
            }}

   
    
    return (
        <ContainerFiltro>
            <h1>Filtro</h1>
            <label htmlFor="valorMin">Valor Mínimo</label>
            <input 
                type="number"
                id="valorMin"
                value={valorMin}
                onChange={handleChangeMin}
            />
            <label htmlFor="valorMax">Valor Máximo</label>
            <input 
                type="number"
                id="valorMax"
                value={valorMax}
                onChange={handleChangeMax}
            />
        </ContainerFiltro>
    )
};

export default Filtro;