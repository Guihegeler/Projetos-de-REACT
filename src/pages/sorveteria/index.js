
import './index.scss';
import Produtos from '../../components/produtos';
import { useState } from 'react';



export default function Sorveteria() {

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState(0);
    const [total, setTotal] = useState(0);
    const [lista, SetLista] = useState([]);

    function adicionarproduto() {
        if(nome === '' || valor === 0){
                alert('Inavlido')   
        }

        else{
            let prod = {
                Nomes: nome,
                preco: valor
            };
    
            SetLista([...lista, prod]);
    
            setTotal(Number(total) + valor)
        }
    }

    return (
        <section>
            <main>
                <div className="cabecalho">
                    <h1>Sorveteria</h1>
                    <img src="/assets/images/sorvete.jpg" alt="" />
                </div>

                <div className='tit'>
                    <h2>Novo item</h2>
                </div>

                <div className="inputs">
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} />


                    <div className="meiuca">
                        <p>R$</p>
                        <input type="number" value={valor} onChange={e => setValor(Number(e.target.value))} />
                    </div>

                    <button onClick={adicionarproduto}>Adicionar</button>
                </div>

                <div className="Lista">
                    <h1>Lista de compras</h1>

                    <p>Total: R${total}</p>
                </div>

                <section className="Porra">
                    {lista.map(item =>
                        <div className='listinha'>
                            <div className='s1'>
                                <p>{item.Nomes}</p>
                            </div>

                            <div className='s2'>
                                <p>R$ {item.preco}</p>
                            </div>

                        </div>
                    )}

                </section>

            </main>
        </section>

    )


}