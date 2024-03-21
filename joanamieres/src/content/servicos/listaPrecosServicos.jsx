const ListaPrecos = ({ titulo, description, preco }) => {
    return (
        <span className="list">
            <span>
                <h3 className="tituloLista">{titulo}</h3>
                <p className="descriptionList">{description}</p>
            </span>
            <p className="cardValue">{preco}</p>
        </span>
    );
}
export default ListaPrecos;