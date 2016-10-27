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
        this.setState({ pgSalvar: 'Salvando...' });
        this.refs.btnSalvar.disabled = true;
        var self = this;
        setTimeout(function() {
            self.setState({ pgSalvar: 'Salvar' });
            self.refs.btnSalvar.disabled = false;            
        }, 1000);
        console.log(this);
    }

    render(){
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
                                    onClick={()=>this.salvar()}
                                    className="btn btn-primary">
                                    <i className="glyphicon glyphicon-floppy-disk"></i>  {this.state.pgSalvar}
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