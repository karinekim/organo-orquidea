import './Produto.css'
import { AiFillCloseCircle, AiFillHeart , AiOutlineHeart} from "react-icons/ai";

const Produto = ({ produto, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(produto.id);
    }
    return (<div className="produto">
        <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(produto.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={produto.imagem} alt={produto.nome} />
        </div>
        <div className="rodape">
            <h4>{produto.nome}</h4>
            <div className='favorito'>
                {produto.favorito ? <AiFillHeart color="#ff0000" size={25} onClick={favoritar} /> : <AiOutlineHeart size={25} onClick={favoritar} />}
            </div>
        </div>
    </div>)
}

export default Produto