import React from 'react';



class Section extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [{index: 0, firstName: "Imię", lastName: "Nazwisko", city: "city", country: "country", sex: "sex"}, {index: 0, firstName: "user1", lastName: "userLast", city: "city", country: "country", sex: "sex"}, {index: 0, firstName: "user", lastName: "userLast", city: "city", country: "country", sex: "sex"}]
        }
    }

    componentWillMount = () => {
        this.listOfUsers = this.state.users.map(u => (<div className="list-group-item list-group-item-action" key={u.index}>{u.firstName + " " + u.lastName}<button type="button" className="info">Info</button><button type="button" className="edit" onClick={this.deleteUser(u.index)}>edycja</button><button type="button" className="delete">-</button></div>));


    };

    deleteUser = i => {
        let users = this.state.users;
        users.splice(i);
        this.setState({users: users});
    };

    addUser = (firstName, lastName, city, country, sex) => {
        let users = this.state.users;
        users.push({firstName: firstName, lastName: lastName, city: city, country: country, sex: sex});
        this.setState({users: users})

    };

    editUser = (firstName, lastName, city, country, sex, i) => {
        let users = this.state.users;

    };

    render() {


        return (
            <div className="container">
                <div className="list-group">
                    <div className="list-group-item list-group-item-action active">
                        Lista użytkowników
                    </div>
                    {this.listOfUsers}
                    <div className="list-group-item list-group-item-action">Dodaj nowego użytkownika<div className="add">+</div></div>
                </div>
            </div>
        );
    }
}

export default Section;
