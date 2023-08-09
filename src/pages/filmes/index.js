import { useState } from 'react';
import './index.scss';
import axios from 'axios';



export default function Filmes () {

    const [filme, setFilme] = useState('');
    const [ListaFilmes, setListaFilmes] = useState ([]);

    async function buscar() {
        let url = 'https://www.omdbapi.com?apikey=9355d9f3&s=' + filme;

        let Response = await axios.get(url);
        setListaFilmes(Response.data.Search);
    }

    


    return(

        <section>
            <div className='cabecalho'>
                <div className='titulo'><p>IMDB</p></div>
                <img src="/assets/images/imdb.png" alt="foda-se" />
            </div>

            <div className='tit'> 
                <h2>Consulta de filmes</h2> 
            </div>

            <div className='barra-pesquisa'>
                <div className='nome'>
                <label>Nome: </label>
                </div>
                
                <input type="text" value={filme} onChange={e => setFilme(e.target.value)}/>

                <button onClick={buscar}><img src="/assets/images/icon-buscar.png" alt="" /></button>


            </div>

            <div className='ListaFilmess'>
                        <div>
                        <p>   Código </p>
                        <p>   Título </p>
                        <p>   Ano    </p>
                        </div>
                        {ListaFilmes.map(item =>
                            <div className='tabela'>
                                {item.imdbID}
                                {item.Title}
                                {item.Year}
                            </div>                            
                            )}
            </div>




        </section>

    );


}