import planetas from "../../planetas.json";
import { Container, Imagem, PlanetasContainer } from "./style"
import Card from "../Card/card";
import CardContainer from "../Card/card";
// 

const Home = ({ valorMin, valorMax, adicionarPlanetaAoCarrinho }) => {

    return (
        <Container>
            <CardContainer
                valorMin={valorMin}
                valorMax={valorMax}
                adicionarPlanetaAoCarrinho={
                    adicionarPlanetaAoCarrinho
                }
            />

        </Container>

    )
};

export default Home;