import React from 'react';
import UserInfo from './sectionComponents/userInfo.jsx';
import AddForm from './sectionComponents/addForm.jsx';
import EditForm from './sectionComponents/editForm.jsx';


class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{firstName: "Damian", lastName: "Wok", city: "Zabrze", country: "Polska", sex: "Mężczyzna"},
                {firstName: "Adam", lastName: "Adamowicz", city: "Sydney", country: "Australia", sex: "Mężczyzna"},
                {firstName: "Anna", lastName: "Malinowska", city: "Waszyngton", country: "USA", sex: "Kobieta"},
                {firstName: "Marek", lastName: "Marko", city: "Rio de Janeiro", country: "Brazylia", sex: "Kobieta"}],
            showUser: false,
            showAddUser: false,
            showEditUser: false,
            chosenUser: 0,
            newUser: null
        };
        this.addUser = this.addUser.bind(this);
    }

    handleSubmit = () => {
        event.preventDefault();
    };

    deleteUser = i => {
        if (this.state.showAddUser === false && this.state.showUser === false && this.state.showEditUser === false){
            if (confirm("Czy jesteś pewny, że chcesz usunąć użytkownika " + this.state.users[i].firstName + " " + this.state.users[i].lastName + " ?")){
                let users = this.state.users;
                users.splice(i, 1);
                this.setState({users: users});
            }
        }
        else window.alert("Nie możesz usuwać użytkowników w trakcie wyświetlania informacji/edycji/dodawania nowego");

    };

    addUser = newUser => {
        let users = this.state.users;
        users.push(newUser);
        this.setState({users: users})
    };

    showUserInfo = i => {
        this.setState({showUser: this.state.showUser === true ? false : true, addUser: false, showEditUser: false, chosenUser: i, showAddUser: false})
    };

    showEditForm = i => {
        this.setState({showEditUser: this.state.showEditUser === true ? false : true, showAddUser: false, showUser: false, chosenUser: i})
    };

    showAddForm = () => {
        this.setState({showAddUser: this.state.showAddUser === true ? false : true, showUser: false, showEditUser: false})
    };

    editUser = (user, i) => {
        let users = this.state.users;
        users[i] = user;
        this.setState({users: users})
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
                                        onClick={() => this.deleteUser(i)}>-</button>
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
