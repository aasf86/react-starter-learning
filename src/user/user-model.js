class UserModel {  
    
    constructor(nome, telefone, email){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.guid = Math.random().toString().split('.')[1]
    }
}

export default UserModel;