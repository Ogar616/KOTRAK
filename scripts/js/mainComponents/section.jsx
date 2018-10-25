import React from 'react';
import UserInfo from './sectionComponents/userInfo.jsx';
import AddForm from './sectionComponents/addForm.jsx';
import EditForm from './sectionComponents/editForm.jsx';


class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{index: 0, firstName: "Kamil", lastName: "Sobczyk", city: "Zabrze", country: "Polska", sex: "Mężczyzna"},
                {index: 1, firstName: "Adam", lastName: "Adamowicz", city: "Sydney", country: "Australia", sex: "Mężczyzna"},
                {index: 2, firstName: "Anna", lastName: "Malinowska", city: "Gdańsk", country: "Polska", sex: "Kobieta"}],
            showUser: false,
            showAddUser: false,
            showEditUser: false,
            chosenUser: 0
        };
        this.addUser = this.addUser.bind(this);
    }

    setName = (event) => {
        let user = this.state.newUser;
        user.firstName = event.target.value;
        this.setState({newUser: user})
    };

    editUser = (index, name) => {
        let users = this.state.users;
        users[index].firstName = name;
        this.setState({users: users})
    };

    handleSubmit = () => {
        event.preventDefault();
    };

    deleteUser = i => {
        let users = this.state.users;
        users.splice(i, 1);
        this.setState({users: users});
    };



    addUser = user => {
        // let users = this.state.users;
        // users.push(user);
        // this.setState({users: users})W
    };

    editUser = (firstName, lastName, city, country, sex, i) => {
        let users = this.state.users;

    };

    showUserInfo = i => {
        this.setState({showUser: this.state.showUser === true ? false : true, addUser: false, showEditUser: false, chosenUser: i})
    };

    showEditForm = i => {
        this.setState({showEditUser: this.state.showEditUser === true ? false : true, showAddUser: false, showUser: false, chosenUser: i})
    };

    showAddForm = () => {
        this.setState({showAddUser: this.state.showAddUser === true ? false : true, showUser: false, showEditUser: false})
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
            showed = <AddForm submit={this.addUser()}/>;
        }
        if (this.state.showEditUser !== false){
            showed = <EditForm chosenUser={this.state.chosenUser}
                               users={this.state.users}
                                firstName={this.state.users[this.state.chosenUser].firstName}
                                lastName={this.state.users[this.state.chosenUser].lastName}
                                city={this.state.users[this.state.chosenUser].city}
                                country={this.state.users[this.state.chosenUser].country}
                                gender={this.state.users[this.state.chosenUser].gender}
            />
        }

        const { users } = this.state;

        return (
            <div className="container">
                <div className="list-group">
                    <div className="list-group-item list-group-item-action active">
                        Lista użytkowników
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
