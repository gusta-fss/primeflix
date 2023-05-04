import { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function Favoritos(){
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || [])

  }, [])

  function excluirFilme(id) {
    let filterFilmes = filmes.filter((filme) => {
        return (filme.id !== id);
    })

    setFilmes(filterFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filterFilmes));
    toast.success("Filme removido com sucesso!");
  }

  return(
    <div className="meus-filmes">
      <h1>Meus filmes</h1>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
      <ul>
        {filmes.map((filme) => {
          return(
            <li key={filme.id}>
              <Link to={`/filme/${filme.id}`}>{filme.title}</Link>
              <button className="excluir" onClick={ () => excluirFilme(filme.id) }>Excluir</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos;
