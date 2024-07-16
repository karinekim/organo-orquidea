import Produto from '../Produto'
import hexToRgba from 'hex-to-rgba';
import './Especie.css'

const Especie = ({ especie, produtos, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        produtos.length > 0 && <section className='especie' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(especie.cor, '0.6') }}>
            <input type='color' className='input-cor' value={especie.cor} onChange={evento => {
                mudarCor(evento.target.value, especie.id);
            }} />
            <h3 style={{ borderColor: especie.cor }}>{especie.nome}</h3>
            <div className='produtos'>
                {produtos.map((produto, indice) => <Produto key={indice} produto={produto} corDeFundo={especie.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} />)}
            </div>
        </section>

    )
}

export default Especie