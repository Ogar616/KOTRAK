import React from 'react';



class Section extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [{index: 0, firstName: "Imię", lastName: "Nazwisko", city: "city", country: "country", sex: "sex"}, {index: 1, firstName: "user1", lastName: "userLast", city: "city", country: "country", sex: "sex"}, {index: 2, firstName: "user", lastName: "userLast", city: "city", country: "country", sex: "sex"}],
            deleteAddEdit: 0
        }
    }

    componentDidMount = () => {
        // this.listOfUsers = this.state.users.map(u => (<div className="list-group-item list-group-item-action" key={u.index}>{u.firstName + " " + u.lastName}<button type="button" className="info">Info</button><button type="button" className="edit" onClick={this.deleteUser(u.index)}>edycja</button><button type="button" className="delete">-</button></div>));
        // this.showUserInfo();

    };

    showUserInfo = () => {
        const users = this.state.users.map(u =>  (<tr>
                <td key={u.index}>{u.index}</td>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.city}</td>
                <td>{u.country}</td>
                <td>{u.sex}</td>
                <td>forecast</td>
            </tr>)
        );

        this.table = (<div className="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Miasto</th>
                    <th>Kraj</th>
                    <th>Pleć</th>
                    <th>Pogoda</th>
                </tr>
                </thead>
                <tbody>
                {users}
                </tbody>
            </table>
        </div>)
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
        if (firstName) users[i].firstName = firstName;
        if (lastName) users[i].lastName = lastName;
        if (city) users[i].city = city;
        if (country) users[i].country = country;
        if (sex) users[i].sex = sex;

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
                {this.table}
            </div>
        );
    }
}


export default Section;
