import React, { Component } from 'react';

class VeiculoComponent extends Component {
    render() {
        return(
        <div>
            <p>Marca: {this.props.marca}</p>
            <p>Ano do modelo: {this.props.anoModelo}</p>
            <p>Cor: {this.props.cor}</p>
            <p>Placa: {this.props.placa}</p>
            <p>Quilometragem: {this.props.km}</p>
            <p>Tipo de Combustível: {this.props.tipoCombustivel}</p>
            <p>Valor da Diaria: {this.props.valorDiaria}</p>
            <p>Tipo do Veículo: {this.props.tipoVeiculo}</p>
            
        </div>
        );
    }
}

export default VeiculoComponent;