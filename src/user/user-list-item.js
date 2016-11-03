import React, { Component } from 'react';
import UserModel from './user-model';

class UserListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
 

    render() {

        var { user: { nome, guid, telefone, email }} = this.props;

        return (
            <tr>
                <td>{nome}</td>
                <td>{telefone}</td>
                <td>{email}</td>
                <td><a className="btn btn-danger"><i className="glyphicon glyphicon-plus" title="Remover item" onClick={() => this.props.onRemove(guid)}></i></a></td>
            </tr>
        );
    }

}

export default UserListItem;
