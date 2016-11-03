import React, { Component } from 'react';

class UserListItem extends Component { 

    render() {

        var { user: { nome, guid, telefone, email }} = this.props;

        return (
            <tr>
                <td>{nome}</td>
                <td>{telefone}</td>
                <td>{email}</td>
                <td><a className="btn btn-danger"><i className="glyphicon glyphicon-remove" title="Remover item" onClick={() => this.props.onRemove(guid)}></i></a></td>
            </tr>
        );
    }

}

export default UserListItem;
