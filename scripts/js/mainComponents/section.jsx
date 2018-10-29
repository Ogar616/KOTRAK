import React from 'react';
import UserInfo from './sectionComponents/userInfo.jsx';
import AddForm from './sectionComponents/addForm.jsx';
import EditForm from './sectionComponents/editForm.jsx';

const localJSON = "http://localhost:3000/users/";

const deleteUser = url => {
    return fetch(url, {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },

    })
        .then(response => response.json());
    
};

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showUser: false,
            showAddUser: false,
            showEditUser: false,
            chosenUser: 1,
            newUser: null
        };
        this.addUser = this.addUser.bind(this);
    }


    getUsers = () => {
        fetch(localJSON)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
          this.setState({users: myJson})
      });
    }

    editUser = (user, i) => {
        return fetch(localJSON + i, {
            method: "PUT", 
            mode: "cors", 
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(user), 
        })
        .then(response => {
            response.json(); 
            this.setState({showEditUser: false})
        })
    };

    addUser = newUser => {
        return fetch(localJSON, {
            method: "POST", 
            mode: "cors", 
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(newUser), 
        })
        .then(response => {

            response.json(); 
            this.setState({showAddUser: false})
        })
    };

    deleteUser = (i, id) => {
        if (this.state.showAddUser === false && this.state.showUser === false && this.state.showEditUser === false){
            if (confirm("Czy jesteś pewny, że chcesz usunąć użytkownika " + this.state.users[i].firstName + " " + this.state.users[i].lastName + " ?")){
                return fetch(localJSON + id, {
                    method: "DELETE", 
                    mode: "cors", 
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: JSON.stringify()
                
                })
                .then(response => {
                    response.json(); 
                })
            }



        }
        else window.alert("Nie możesz usuwać użytkowników w trakcie wyświetlania informacji/edycji/dodawania nowego");

    };

    componentWillMount = () => {
        this.getUsers();
    };

    handleSubmit = () => {
        event.preventDefault();
    };
 
    showUserInfo = i => {
        this.setState({showUser: this.state.showUser !== true, addUser: false, showEditUser: false, chosenUser: i, showAddUser: false})
    };

    showEditForm = i => {
        this.setState({showEditUser: this.state.showEditUser !== true, showAddUser: false, showUser: false, chosenUser: i})
    };

    showAddForm = () => {
        this.setState({showAddUser: this.state.showAddUser !== true, chosenUser: this.state.users.length, showUser: false, showEditUser: false})
    };

    render() {
        let showed = null;
     

        if (this.state.showUser !== false){
            showed = (<UserInfo show={this.state.showUser}
                                users={this.state.users}
                                chosenUser={this.state.chosenUser}
                                country={this.state.users[this.state.chosenUser].country}
                                city={this.state.users[this.state.chosenUser].city}/>);
        }

        if (this.state.showAddUser !== false){
            showed = <AddForm newUser={e => this.addUser(e)}/>;
        }
        if (this.state.showEditUser !== false){
            showed = <EditForm  chosenUser={this.state.chosenUser}
                                users={this.state.users}
                                firstName={this.state.users[this.state.chosenUser].firstName}
                                lastName={this.state.users[this.state.chosenUser].lastName}
                                city={this.state.users[this.state.chosenUser].city}
                                country={this.state.users[this.state.chosenUser].country}
                                gender={this.state.users[this.state.chosenUser].gender}
                                id={this.state.users[this.state.chosenUser].id}
                                editUser={(e, i) => this.editUser(e, i)}
            />
        }

        const { users } = this.state;



        return (
            <div className="container">
                <div className="list-group">
                    <div className="list-group-item list-group-item-action active">
                        Lista użytkowników
                        {console.log(this.state.newUser)}
                    </div>
                    {users.map((u, i) => (
                            <div className="list-group-item list-group-item-action" key={i}>{u.firstName + " " + u.lastName}
                                <button type="button"
                                        className="info"
                                        onClick={() => this.showUserInfo(i)}>info</button>
                                <button type="button"
                                        className="edit"
                                        onClick={() => this.showEditForm(i)}>edycja</button>
                                <button type="button"
                                        className="delete"
                                        onClick={() => this.deleteUser(i, u.id)}>-</button>
                            </div>
                        ))}
                    <div className="list-group-item list-group-item-action">Dodaj nowego użytkownika<button className="add" onClick={() => this.showAddForm()}>+</button></div>
                </div>
                {showed}
            </div>
        );
    }
}

export default Section;
