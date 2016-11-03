import React, { Component } from 'react';
import UserModel from './user-model';
import UserListItem from './user-list-item';

class UserList extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: props.users || [new UserModel('Anderson', '654a654asdf', '654as654dfas'), new UserModel('asdf','asdf','asdfasdfas')]         
        };
    }

    handleRemove(guid){

        this.state.users = this.state.users.filter((item,index)=>{
            return item.guid !== guid;
        });

        this.setState({ users: this.state.users });
                
    }

    render(){        
        return(
            <div className="container">
                <div className="well">
                    <div className="row">            
                        <div className="table-responsive">
                            <table className="table table-hover table-condensed">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Telefone</th>
                                        <th>Email</th>
                                        <th width="3%"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.state.users.map((item, index) => <UserListItem user={item} key={index} onRemove={(guid)=>this.handleRemove(guid)} />) }
                                </tbody>                                                            
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default UserList;    
    