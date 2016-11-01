import React, { Component } from 'react';
import UserModel from './user-model';

class UserListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: props.user || new UserModel('','','')            
        };
    }

    render(){        
        return(
            <tr>
                <td>{this.state.user.nome}</td>
                <td>{this.state.user.telefone}</td>
                <td>{this.state.user.email}</td>
            </tr>               
        );
    }

}

export default UserListItem;    
    