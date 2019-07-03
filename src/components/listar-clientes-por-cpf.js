import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ListarClientesPorCPF extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clientes: []
        }
    }

    componentWillMount() {
        axios.get("http://localhost:8080/exemplo/cliente/buscar-por-cpf")
            .then(response => {
                this.setState({clientes: response.data});
            });
    }

    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Naturalidade</th>
                        <th>Data de Nascimento</th>
                        <th>Número CNH</th>
                        <th>Data Validade</th>
                        <th>Tipo</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>E-mail</th> 
                        <th>Profissão</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.clientes.map(cliente => 
                        <tr key={cliente.idcliente}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.rg}</td>
                            <td>{cliente.naturalidade}</td>
                            <td>{cliente.dataNascimento}</td>
                            <td>{cliente.numCNH}</td>
                            <td>{cliente.validadeCNH}</td>
                            <td>{cliente.tipoCNH}</td>
                            <td>{cliente.endereco}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.profissao}</td>
                            <td><Link to={`/cliente/cadastrar/${cliente.idcliente}`}>Editar</Link></td>
                        </tr>
                    )}   
                </tbody>                
            </table>
        )
    }


}

export default ListarClientesPorCPF;