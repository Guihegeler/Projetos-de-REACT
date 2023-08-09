import './index.scss'



export default function Produtos(props) {


    return(
        <div className="comp-produto">
            <p>{props.nome}</p>
            <p>{props.valor}</p>
        </div>
    )
}