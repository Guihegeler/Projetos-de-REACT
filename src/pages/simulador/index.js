import { useState } from 'react';
import './index.scss';

export default function Simulador() {

    const [valor, setValor] = useState(0);
    const [parcela, setParcela] = useState(0);
    const [juros, setJuros] = useState(0);
    const [vtp, setVtp] = useState(0);
    const [vt, setVt] = useState(0);

    function calcularPreco() {
        let vj = ((juros / 100) * valor)

        setVtp( (valor / parcela) + vj);

        setVt( vtp * parcela);
    }

    return(

        <section>


        <div className='titulo'>
            <h1>Simulador de Compra de Veículo</h1>
        </div>

        <div className='conteiner'>

            <div className="imagem">
                <img src="/assets/images/carro2.svg"/> 
            </div>

            <div className="calculador">

                <div className="pri">
                    <p>Valor total</p>
                    <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
                </div>

                <div className="seg">
                    <p>Parcelas</p>
                    <input type="text" value={parcela} onChange={e => setParcela(e.target.value)}/>

                    <p>Juros Mensal(%)</p>
                    <input type="text" value={juros} onChange={e => setJuros(e.target.value)}/>
                </div>

                <div className="botao">
                    <button onClick={calcularPreco}>Calcular</button>
                </div>

                <div className="finalzin">
                    <p>Parcelas: {vtp.toFixed(2)} </p> 
                    <p>Valor Total: {vt.toFixed(2)} </p>

                </div>

            </div>

        </div>


        </section>

    )

}