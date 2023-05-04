import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css'
import api from '../../services/api';


function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
       async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key:"1c2a76cbffe335a09939bf552765e179",
                    language:"pt-BR"
                }
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false)
            })
            .catch(() => {
                navigate("/", { resplace: true })
                return;
            })
       } loadFilme();
    }, [id, navigate])


    function salvarFilme() {
        const listaFilmes = localStorage.getItem("@primeflix");
        let filmesSalvo = JSON.parse(listaFilmes) || [];

        const hasFilme = filmesSalvo.some((filmeSalvo) => filmeSalvo.id === filme.id);
        if (hasFilme) { toast.warn("Este filme já está na lista!"); return; }
        
        filmesSalvo.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvo));
        toast.success("Filme salvo com sucesso!");
    }


    if(loading) {
        return(<div className="loading"><h2>Carregando detalhes...</h2></div>)
    }


    return(
        <div className="filme-info">
            
            <div className="top-info">
                <strong>{filme.title}</strong>
                <div className="buttons">
                    <button onClick={ salvarFilme }>Salvar</button>
                    <button>
                        <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
                            Trailer
                        </a>
                    </button>
                </div>
            </div>

            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={`poster do filme ${filme.title}`}/>
            <h3>Sinopse:</h3>
            <span className="sinopse">{filme.overview}</span>
            
            <div className="more-info">
                <span>Duração: {filme.runtime} mim</span>
                <span>Avaliação: {filme.vote_average.toFixed(1)}/10</span>
            </div>

        </div>
    );
}

export default Filme;
