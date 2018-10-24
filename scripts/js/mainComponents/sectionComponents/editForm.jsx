import React from 'react';

class EditForm extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        const nameValue = "";
        return (
            <div>
                <h3>Edycja użytkownika</h3>
                <form>
                    <div className="form-group" onSubmit={this.handleSubmit}>
                        <label>Imię</label>
                        <input className="form-control form-control-lg" type="text" placeholder={this.props.users[this.props.chosenUser].firstName}  value={nameValue}></input>
                    </div>
                    <div className="form-group">
                        <label>Nazwisko</label>
                        <input className="form-control form-control-lg" type="text" placeholder={this.props.users[this.props.chosenUser].lastName} ></input>

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
                        <input className="form-control form-control-lg" type="text" placeholder={this.props.users[this.props.chosenUser].city} ></input>
                    </div>
                    <div className="form-group">
                        <label>Kraj</label>
                        <input className="form-control form-control-lg" type="text" placeholder={this.props.users[this.props.chosenUser].country} ></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Edytuj</button>
                </form>
            </div>
        );
    }

}

export default EditForm;
