import { PlaceHolder2 } from "../images/importsImg";
const CardServicos = ({ preco, titulo, servico }) => {
    return (
        <div className="Card">

            <div className="carImg">
                <span className="cardServico">{servico}</span>
                <img src={PlaceHolder2} alt="Servicos" className="cardImg" />
            </div>
            <h4 className="cardTitle">{titulo}</h4>
            <p className="cardDescription">
                Seu Mapa Astral é um guia para a sua autenticidade e nesse atendimento encontramos aquilo que você veio entregar ao mundo.
                Para isso, entendemos onde estão seus desafios e potencialidades, encontrando sua luz e encontrando....
            </p>
            <span className="cardValue">
                {preco}
            </span>
            <span href="#" className="SaibaBtn">SAIBA MAIS</span>
        </div>
    )
}
export default CardServicos;