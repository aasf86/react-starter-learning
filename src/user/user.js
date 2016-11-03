import React, { Component } from 'react';
import UserModel from './user-model';

class User extends Component {    
    
    constructor(props){
        super(props);
        this.state = {
            pgSalvar: 'Salvar',
            btnSalvarEnable: props.btnSalvarEnable || false,
            model: props.model || new UserModel('', '', ''),
            handleSalvar: props.onSalvar
        };
    }

    salvar(){
        this.setState({ pgSalvar: 'Salvando...',  btnSalvarEnable: true });
        setTimeout(() => {            
            this.setState({ 
                pgSalvar: 'Salvar',
                btnSalvarEnable: false,
                model: new UserModel(this.refs.nome.value, this.refs.phone.value, this.refs.email.value) 
            });            
            this.state.handleSalvar(this.state.model);
            this.setState({ model: new UserModel('', '', '') });
            this.refs.nome.value = '';
            this.refs.phone.value = '';
            this.refs.email.value = '';
        }, 1000);
    }

    render(){
        const {
            btnSalvarEnable, 
            pgSalvar,
            model
        } = this.state;

        return(
            <div className="container">
                <form className="">
                    <div className="well">
                        <div className="row">
                            <div className="form-group col-md-3">
                                <label className="control-label">Nome</label>
                                <input 
                                    ref="nome"
                                    maxLength="100"
                                    type="text"
                                    className="form-control"
                                    placeholder="Insira seu nome"
                                    name="name"
                                    defaultValue={model.nome} />
                            </div>
                            <div className="form-group col-md-3">
                                <label className="control-label">Telefone</label>
                                <input
                                    ref="phone"
                                    maxLength="15"
                                    type="text"
                                    className="form-control"
                                    placeholder="Insira seu telefone"
                                    name="phone"
                                    defaultValue={model.telefone} />
                            </div>
                            <div className="form-group col-md-3">
                                <label className="control-label">Email</label>
                                <input 
                                    ref="email"
                                    maxLength="100"
                                    type="text"
                                    className="form-control"
                                    placeholder="Insira seu email"
                                    name="email" 
                                    defaultValue={model.email}/>
                            </div>                        
                            <div className="form-group col-md-2"> 
                                <label className="control-label">&nbsp;</label>                               
                                <button
                                    ref="btnSalvar"
                                    type="button"
                                    disabled={btnSalvarEnable}
                                    onClick={()=>this.salvar()}
                                    className="btn btn-primary form-control">
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