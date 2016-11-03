import React, { Component } from 'react';
import UserModel from './user-model';

class UserListItem extends Component {

    constructor(props){        
        super(props);
        this.state = {
            user: props.user || new UserModel('','',''),
            handleRemove: props.onRemove            
        };
    }

    removeItem(){      
        console.log(this.state.user.guid);  
        this.state.handleRemove(this.state.user.guid);
    }

    render(){           
        return(
            <tr>
                <td>{this.state.user.nome}</td>
                <td>{this.state.user.telefone}</td>
                <td>{this.state.user.email}</td>
                <td><a className="btn btn-danger"><i className="glyphicon glyphicon-plus" title="Remover item" onClick={()=>this.removeItem()}></i></a></td>
            </tr>               
        );
    }

}

export default UserListItem;    
    