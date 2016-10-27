import React, { Component } from 'react';

class User extends Component {    
    
    constructor(props){
        super(props);
        this.state = {
            pgSalvar: 'Salvar',
            btnSalvarEnable: false
        };        
        console.log(props);
    }

    salvar(){
        this.setState({ pgSalvar: 'Salvando...',  btnSalvarEnable: true });
        /*
        this.refs.btnSalvar.disabled = true;
        var self = this;
        */
        setTimeout(() => {
            //self.setState({ pgSalvar: 'Salvar' });
            this.setState({ pgSalvar: 'Salvar',  btnSalvarEnable: false });
            //self.refs.btnSalvar.disabled = false;            
        }, 1000);
        console.log(this);
    }

    render(){
        const {btnSalvarEnable, pgSalvar} = this.state;
        return(
            <div className="container">
                <form>
                    <div className="well">
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label className="control-label">Nome</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Insira seu nome"
                                    name="name" />
                            </div>
                            <div className="form-group col-md-4">
                                <label className="control-label">Telefone</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Insira seu telefone"
                                    name="phone" />
                            </div>
                            <div className="form-group col-md-4">
                                <label className="control-label">Email</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Insira seu email"
                                    name="email" />
                            </div>                             
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12">
                                <button
                                    ref="btnSalvar"
                                    type="button"
                                    disabled={btnSalvarEnable}
                                    onClick={()=>this.salvar()}
                                    className="btn btn-primary">
                                    <i className="glyphicon glyphicon-floppy-disk"></i>  {pgSalvar}
                                </button>
                            </div>
                        </div>
                    </div>                
                </form>
            </div>
        );
    }
}

export default User;