import React from 'react';
import s from './App.module.css';

class App extends React.Component {

    state = {
        bright: '',

        memoryFirst: '',
        memorySecond: '',
        input: '0',
        action: '/',
        ok: false
    };

    click = (text) => {
        let input = this.state.input;
        if (this.state.ok === false) {
            this.setState({input: text, ok: true})
        } else {
            this.setState({input: input + text})
        }
    };

    clickAC = () => {
        this.setState({input: '0', memoryFirst: '', memorySecond: '', action: '', ok: false})
    };

    clickPoint = () => {
        if (this.state.input.indexOf('.') === -1) {
            this.setState({input: this.state.input + "."})
        }
    };
    changeSign = () => {
        if (+this.state.input > 0) {
            this.setState({input: '-' + this.state.input})
        }else {
            this.setState({input: Math.abs(this.state.input) })
        }
    };

    equalClick = () => {
        switch (this.state.action) {
            case '/':
                let resultDiv = this.state.memorySecond / this.state.input;
                this.setState({input: resultDiv, memorySecond: '', action: '', ok: false});
                break;
            case 'x':
                let resultInt = this.state.memorySecond * this.state.input;
                this.setState({input: resultInt, memorySecond: '', action: '', ok: false});
                break;
            case '-':
                let resultMin = this.state.memorySecond - this.state.input;
                this.setState({input: resultMin, memorySecond: '', action: '', ok: false});
                break;
            case '+':
                let resultPlus = +this.state.memorySecond + +this.state.input;
                this.setState({input: resultPlus, memorySecond: '', action: '', ok: false});
                break;
        }
    };

    equalFunc = () => {
        switch (this.state.action) {
            case '/':
                let resultDiv = this.state.memorySecond / this.state.input;
                return resultDiv;
                break;
            case 'x':
                let resultInt = this.state.memorySecond * this.state.input;
                return resultInt;
                break;
            case '-':
                let resultMin = this.state.memorySecond - this.state.input;
                return resultMin;
                break;
            case '+':
                let resultPlus = +this.state.memorySecond + +this.state.input;
                return resultPlus;
                break;
        }
    };

    superSymbol = (symbol) => {
        switch (symbol) {
            case '/':
                if (this.state.memorySecond === '') {
                    this.setState({action: '/', memorySecond: this.state.input, ok: false})
                    console.log(this.state)
                } else {
                    let result = this.equalFunc();
                    this.setState({action: '/', memorySecond: result, input: result, ok: false})
                    console.log(this.state)
                }
                break;
            case 'x':
                if (this.state.memorySecond === '') {
                    this.setState({action: 'x', memorySecond: this.state.input, ok: false})
                } else {
                    let result = this.equalFunc();
                    this.setState({action: 'x', memorySecond: result, input: result, ok: false})
                }
                break;
            case '-':
                if (this.state.memorySecond === '') {
                    this.setState({action: '-', memorySecond: this.state.input, ok: false})
                } else {
                    let result = this.equalFunc();
                    this.setState({action: '-', memorySecond: result, input: result, ok: false})
                }
                break;
            case '+':
                if (this.state.memorySecond === '') {
                    this.setState({action: '+', memorySecond: this.state.input, ok: false})
                } else {
                    let result = this.equalFunc();
                    this.setState({action: '+', memorySecond: result, input: result, ok: false})
                }
                break;
        }

    };

    onMouseDownEffectFunc = (level)=>{
        if(level === 'up'){
            this.setState({bright: s.bright})
        }else{
            this.setState({bright: ''})
        }

    };

    render = () => {
        return (
            <div className={s.wrapper}>
                <div>
                    <input placeholder={this.state.input} className={s.input}/>
                </div>
                <div className={s.row}>
                    <div className={s.greyButton} onClick={() => {
                        this.clickAC()
                    }}>AC
                    </div>
                    <div className={s.greyButton} onClick={this.changeSign}>+/-</div>
                    <div className={s.greyButton}>%</div>
                    <div className={s.orangeButton} onClick={() => {
                        this.superSymbol('/')
                    }}>/
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.blackButton} onClick={() => {
                        this.click("7")
                    }}>7
                    </div>
                    <div className={s.blackButton} onClick={() => {
                        this.click("8")
                    }}>8
                    </div>
                    <div className={s.blackButton} onClick={() => {
                        this.click("9")
                    }}>9
                    </div>
                    <div className={s.orangeButton} onClick={() => {
                        this.superSymbol('x')
                    }}>x
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.blackButton} onClick={() => {
                        this.click("4")
                    }}>4
                    </div>
                    <div className={s.blackButton} onClick={() => {
                        this.click("5")
                    }}>5
                    </div>
                    <div className={s.blackButton} onClick={() => {
                        this.click("6")
                    }}>6
                    </div>
                    <div className={s.orangeButton} onClick={() => {
                        this.superSymbol('-')
                    }}>-
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.blackButton} onClick={() => {
                        this.click("1")
                    }}>1
                    </div>
                    <div className={s.blackButton} onClick={() => {
                        this.click("2")
                    }}>2
                    </div>
                    <div className={s.blackButton} onClick={() => {
                        this.click("3")
                    }}>3
                    </div>
                    <div className={s.orangeButton} onClick={() => {
                        this.superSymbol('+')
                    }}>+
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.zero} onClick={() => {
                        this.click("0")
                    }}>0
                    </div>
                    <div className={`${s.blackButton} ${this.state.bright}`} onClick={this.clickPoint}
                         onMouseDown={()=>this.onMouseDownEffectFunc('up')}
                         onMouseUp={() => this.onMouseDownEffectFunc()}
                    >,</div>
                    <div className={`${s.orangeButton} ${this.state.bright}`} onClick={this.equalClick}
                         onMouseDown={()=>this.onMouseDownEffectFunc('up')}
                         onMouseUp={() => this.onMouseDownEffectFunc()}>=
                    </div>
                </div>
            </div>
        )
    }

}

export default App;
