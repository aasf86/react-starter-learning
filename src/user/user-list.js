import React, { Component } from 'react';
import UserModel from './user-model';
import UserListItem from './user-list-item';

class UserList extends Component {

    constructor(props) {
        super(props);        
    }
 

    render() {


        const {users} = this.props;

        return (
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
                                    {users.map((item, index) => <UserListItem user={item} key={item.guid} onRemove={(guid) => this.props.onRemove(guid)} />)}
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
