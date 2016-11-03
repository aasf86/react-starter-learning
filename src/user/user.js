import React, { Component } from 'react';
import UserModel from './user-model';

class User extends Component {

    constructor(props) {
        super(props);

        var model = props.model || new UserModel('', '', '');

        this.state = Object.assign({}, model, {
            loading: false
        });
    }

    salvar() {
        this.setState({ loading: true });

        
            var modelLimpo = new UserModel('', '', '');
            var novoState = Object.assign({}, modelLimpo, { loading: false });
            this.props.onSalvar(new UserModel(this.state.nome, this.state.telefone, this.state.email));
            this.setState(novoState);
        
    }

    link(propName) {
        return {
            name: propName,
            className: "form-control",
            type: "text",
            placeholder: `Insira seu ${propName}`,
            value: this.state[propName],
            onChange: (e) => this.setState({ [propName]: e.target.value })
        };
    }

    renderInput(name, maxLength, Tag = "input"){
        return <Tag {...this.link(name) } maxLength={maxLength} />
    }

    render() {
        const {
            loading,
        } = this.state;

        return (
            <div className="container">
                <form className="">
                    <div className="well">
                        <div className="row">
                            <div className="form-group col-md-3">
                                <label className="control-label">Nome</label>
                                {this.renderInput("nome", 100)}
                            </div>
                            <div className="form-group col-md-3">
                                <label className="control-label">Telefone</label>
                                {this.renderInput("telefone", 15)}
                            </div>
                            <div className="form-group col-md-3">
                                <label className="control-label">Email</label>
                                {this.renderInput("email", 100)}
                            </div>
                            <div className="form-group col-md-2">
                                <label className="control-label">&nbsp;</label>
                                <button
                                    ref="btnSalvar"
                                    type="button"
                                    disabled={loading}
                                    onClick={() => this.salvar()}
                                    className="btn btn-primary form-control">
                                    <i className="glyphicon glyphicon-plus"></i>  {loading ? "Adicionando..." : "Adicionar"}
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