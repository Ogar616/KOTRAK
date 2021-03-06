import React from 'react';
import Input from './formComponents/input.jsx'
import Select from './formComponents/select.jsx'
import Button from './formComponents/button.jsx'

class AddForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                firstName: '',
                lastName: '',
                country: '',
                city: '',
                gender: '',
             
            },
            genderOptions: ['Kobieta', 'Mężczyzna'],
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }


    handleFormSubmit = e => {
        e.preventDefault();
        this.props.newUser(this.state.newUser);



    };

    handleFirstName = e => {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, firstName: value
                }
        }));
    };

    handleLastName = e => {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, lastName: value
                }
        }));
    };

    handleCity = e => {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, city: value
                }
        }));
    };

    handleCountry = e => {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, country: value
                }
        }));
    };

    handleSelect = e => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
                return {
                    newUser : {
                        ...prevState.newUser, [name]: value
                    }
                }
            })
    };

    render() {
        return (
            <div>
                <h3>Dodaj użytkownika</h3>
                <form className="form-group" onSubmit={this.handleFormSubmit}>
                    <Input type={'text'}
                           title= {'Imię'}
                           name= {'imie'}
                           value={this.state.newUser.firstName}
                           placeholder = {'Wpisz imię'}
                           handleChange = {this.handleFirstName}
                    />
                    <Input type={'text'}
                           title= {'Nazwisko'}
                           name= {'Nazwisko'}
                           value={this.state.newUser.lastName}
                           placeholder = {'Wpisz nazwisko'}
                           handleChange = {this.handleLastName}
                    />
                    <Select title={'Płeć'}
                            name={'gender'}
                            options = {this.state.genderOptions}
                            value = {this.state.newUser.gender}
                            placeholder = {'Wybierz płeć'}
                            handleChange = {this.handleSelect}
                    />
                    <Input type={'text'}
                           title= {'Miasto'}
                           name= {'miasto'}
                           value={this.state.newUser.city}
                           placeholder = {'Wpisz miasto'}
                           handleChange = {this.handleCity}
                    />
                    <Input type={'text'}
                            title= {'Państwo'}
                            name= {'panstwo'}
                            value={this.state.newUser.country}
                            placeholder = {'Wpisz państwo'}
                            handleChange = {this.handleCountry}
                    />
                    <Button title="Dodaj" onClick={this.handleFormSubmit}/>
                </form>
            </div>
        );
    }
}

export default AddForm;
