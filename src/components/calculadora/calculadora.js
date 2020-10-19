import React, {Component} from 'react';
import './calculadora.css';
import Display from './display/display';

class Calculadora extends Component{
    state = {
        numeroA: 0,
        numeroB: 0
    }

    alterarValorNumeroA = (event) => {
        this.setState({numeroA: event.target.value})
    }

    alterarValorNumeroB = (event) => {
        this.setState({numeroB: event.target.value})
    }

    calculos = [
        {
            descricao: 'Soma dos Números',
            calculo: (a,b) => {
                return a+b;
            },
        },

        {
            descricao: 'Subtração dos Números',
            calculo: (a,b) => {
                return a-b;
            },
        },

        {
            descricao: 'Multiplicação dos Números',
            calculo: (a,b) => {
                return a*b;
            },
        },

        {
            descricao: 'Divisão dos Números',
            calculo: (a,b) => {
                return a/b;
            },
        },
    ]

    render(){
        return(
            <div class="calculadora"> 
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>Digite dois Números:</p>

                <input onChange = {this.alterarValorNumeroA} /> <input onChange = {this.alterarValorNumeroB} />

                <p>
                    {this.state.numeroA} {this.state.numeroB}
                </p>

                <div>
                    {this.calculos.map((calculo) => (
                        <Display
                            numeroA={this.state.numeroA}
                            numeroB={this.state.numeroB}
                            descricao={calculo.descricao}
                            calculo={calculo.calculo}
                        >
                        </Display>
                    ))}
                </div>
            </div>
        )
    }
}

export default Calculadora;