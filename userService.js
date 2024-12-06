class UserService {
  constructor(database) {
    this.database = database;
  };
    createUser(name) {
      //CRIA UM ID UNICO USANDO O TIMESTAMP
        const id = Date.now();

        const user = {id, name};

        this.database.users.push(user);

        return user;
    };

    getUserById(id){
      return this.database.users.find(user => user.id === id);
    };  
}

export default UserService;
