import { Container } from "./style"
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