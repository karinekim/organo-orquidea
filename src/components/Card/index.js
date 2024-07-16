import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';
import React from 'react';

function Card({ id, titulo, linkYoutube }) {
    console.log(id, titulo, linkYoutube)
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
<div className={styles.container}>
            <Link className={styles.linkYoutube} to={`/${id}`}>
                <a href={linkYoutube} target="_blank" rel="noopener noreferrer" alt={titulo} className={styles.linkYoutube}>
        Ver no YouTube
      </a>
                <h2>{titulo}</h2>
                
            </Link>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, linkYoutube })
                }} />
        </div>
  );
}

export default Card;
