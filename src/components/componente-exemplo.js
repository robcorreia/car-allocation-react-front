import React, { Component } from 'react';

class ComponenteExemplo extends Component {
  render() {
	  return (
		<div>
			<h1> { this.props.conteudo } </h1>
		</div>
	  );
  }
}

ComponenteExemplo.defaultProps = {
	conteudo: "Conteúdo Default"
};

export default ComponenteExemplo;
