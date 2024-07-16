import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoCadastrar, especies, aoCriarEspecie }) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [especie, setEspecie] = useState('')
    const [nomeEspecie, setNomeEspecie] = useState('')
    const [corEspecie, setCorEspecie] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, imagem, especie )
        aoCadastrar({
            nome,
            imagem,
            especie
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do produto.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Especies'
                    items={especies} 
                    valor={especie}
                    aoAlterado={valor => setEspecie(valor)}/>
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                aoCriarEspecie({ nome: nomeEspecie, cor: corEspecie })
            }}>
                <h2>Preencha os dados para criar uma nova espécie.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do especie'
                    valor={nomeEspecie}
                    aoAlterado={valor => setNomeEspecie(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Cor'
                    type='color'
                    placeholder='Digite sua cor'
                    valor={corEspecie}
                    aoAlterado={valor => setCorEspecie(valor)}/>
                <Botao texto='Criar Especie' />
            </form>
        </section>
    )
}

export default Formulario