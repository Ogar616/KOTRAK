import React from 'react';


class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{index: 0, firstName: "Kamil", lastName: "Sobczyk", city: "Zabrze", country: "Polska", sex: "Mężczyzna"},
                {index: 1, firstName: "Adam", lastName: "Adamowicz", city: "Katowice", country: "Polska", sex: "Mężczyzna"},
                {index: 2, firstName: "Anna", lastName: "Malinowska", city: "Gliwice", country: "Polska", sex: "Kobieta"}],
            newUser: {index: "", firstName: "", lastName: "", city: "", country: "", sex: ""},
            showUser: null,
            addUser: null,
            editUser: null
        };
        this.setName = this.setName.bind(this);
    }

    setName = (event) => {
        this.setState({newUser: {firstName: event.target.value}})
    };

    addForm = (<div>
        <form>
            <div className="form-group" onSubmit={this.handleSubmit}>
                <label>Imię</label>
                <input className="form-control form-control-lg" type="text" placeholder="Wpisz imię"  onChange={() => this.setName}></input>
            </div>
            <div className="form-group">
                <label>Nazwisko</label>
                <input className="form-control form-control-lg" type="text" placeholder="Wpisz nazwisko" ></input>

            </div>
            <div className="form-group">
                <label>Wybierz płeć</label>
                <select className="form-control" >
                    <option>Mężczyzna</option>
                    <option>Kobieta</option>
                </select>
            </div>
            <div className="form-group">
                <label>Miasto</label>
                <input className="form-control form-control-lg" type="text" placeholder="Wpisz miasto" ></input>
            </div>
            <div className="form-group">
                <label>Kraj</label>
                <input className="form-control form-control-lg" type="text" placeholder="Wpisz państwo" ></input>
            </div>
            <button type="submit" className="btn btn-primary">Dodaj</button>
        </form>
    </div>);

    handleSubmit = () => {
        event.preventDefault();
    };


    deleteUser = i => {
        let users = this.state.users;
        users.splice(i, 1);
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

    showUserInfo = (index) => {
        const user = (<tr>
            <td key={this.state.users[index].index}>{this.state.users[index].index}</td>
            <td>{this.state.users[index].firstName.toUpperCase()}</td>
            <td>{this.state.users[index].lastName}</td>
            <td>{this.state.users[index].city}</td>
            <td>{this.state.users[index].country}</td>
            <td>{this.state.users[index].sex}</td>
            <td>forecast</td>
        </tr>);

        this.info = (<div className="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Miasto</th>
                    <th>Kraj</th>
                    <th>Pleć</th>
                    <th>Pogoda</th>
                </tr>
                </thead>
                <tbody>
                {user}
                </tbody>
            </table>
        </div>);
        this.setState({showUser: this.state.users[index].index, addUser: null, editUser: null})
    };

    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <div className="list-group">
                    <div className="list-group-item list-group-item-action active">
                        Lista użytkowników
                    </div>
                    {users.map((u, i) => (
                            <div className="list-group-item list-group-item-action" key={u.index}>{u.firstName + " " + u.lastName}
                                <button type="button" className="info" onClick={() => this.showUserInfo(i)}>Info</button>
                                <button type="button" className="edit">edycja</button>
                                <button type="button" className="delete" onClick={() => this.deleteUser(i)}>-</button>
                            </div>
                        ))}
                    <div className="list-group-item list-group-item-action">Dodaj nowego użytkownika<button className="add" onClick={() => this.addUser}>+</button></div>
                </div>
                {this.info}
                {this.addForm}
            </div>
        );
    }
}

export default Section;
