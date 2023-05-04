import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css'

function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    function compararData(filmeA, filmeB) {
        return new Date(filmeB.release_date) - new Date(filmeA.release_date) ;
    }    

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get('/movie/now_playing', {
                params:{
                    api_key:"1c2a76cbffe335a09939bf552765e179",
                    language:"pt-BR",
                    region: "BR"
                }
            });
            setFilmes(response.data.results);
            setLoading(false)
        } loadFilmes();
    }, [])

    if(loading) {
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    filmes.sort(compararData)
    
    
    
    return(
        <div className="container">
            <nav className="nav-home">
                <Link className="lacamentos" to="/">Lançamentos</Link>
            </nav>
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                          <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={`poster do filme ${filme.title}`}/>
                          <Link to={`/filme/${filme.id}`}>Acessar</Link>
                          <strong>{filme.title}</strong>
                          <span>{filme.release_date}</span>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
