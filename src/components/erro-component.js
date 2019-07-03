import React, {Component} from 'react';

class ErroComponent extends Component {
    
    render() {
        if (this.props.erro) {
            return (
                <div>{this.props.erro}</div>
            )
        }
        return (
            <span></span>
        )
    }

}

export default ErroComponent;