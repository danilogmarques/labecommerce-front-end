import planetas from "../../planetas.json";
import { Imagem, PlanetasContainer } from "./style"
import Card from "../Card/card";
import CardContainer from "../Card/card";
// 

const Home = ({ valorMin, valorMax, adicionarPlanetaAoCarrinho }) => {

    return (
        <div>
            <CardContainer
                valorMin={valorMin}
                valorMax={valorMax}
                adicionarPlanetaAoCarrinho={
                    adicionarPlanetaAoCarrinho
                }
            />

        </div>

    )
};

export default Home;