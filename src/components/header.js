import React, { Component } from 'react';
import './Header.css';
import CriarCliente from './criar-cliente';
import CadastrarVeiculo from './cadastrar-veiculo.js'
import ListarVeiculosPorPlaca from './listar-veiculos-por-placa.js';
import ListarClientesPorCPF from './listar-clientes-por-cpf.js';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
          <BrowserRouter>
              <div>
                  <header>
                  <Link className="brand" to="/">Car Allocation</Link>
                      <nav>
                      <ul className="menu">
                        <li><Link to="/cliente/cadastrar">Cadastrar Cliente</Link></li>
                        <li><Link to="/cliente/listar">Listar Clientes por CPF</Link></li>
                        <li><Link to="/veiculo/cadastrar">Cadastrar Veículo</Link></li>
                        <li><Link to="/veiculo/listar">Listar Veículos por Placa</Link></li>
                    </ul>
                      </nav>
                  </header>
              </div>
              <div>
				<Route exact path="/cliente/cadastrar/:id?" component={CriarCliente} />
				<Route exact path="/cliente/listar/:cpf?" component={ListarClientesPorCPF} />
				<Route exact path="/veiculo/cadastrar/:id?" component={CadastrarVeiculo} />
				<Route exact path="/veiculo/listar/:placa?" component={ListarVeiculosPorPlaca} />
			</div>
              
          </BrowserRouter>
        );
    }
  }
  
  export default Header;
  