import React from 'react';
import Input from './addFormComponents/input.jsx'
import Select from './addFormComponents/select.jsx'
import Button from './addFormComponents/button.jsx'

class AddForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                name: '',
                lastName: '',
                country: '',
                city: '',
                gender: ''
            },
            genderOptions: ['Kobieta', 'Mężczyzna'],
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
    }


    handleFormSubmit(e) {
        e.preventDefault();
        console.log("works");
    }

    handleFirstName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, name: value
                }
        }));
    }

    handleLastName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, lastName: value
                }
        }));
    }

    handleCity(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, city: value
                }
        }));
    }

    handleCountry(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, country: value
                }
        }));
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
                return {
                    newUser : {
                        ...prevState.newUser, [name]: value
                    }
                }
            }, () => console.log(this.state.newUser)
        )
    }

    render() {
        return (
            <div>
                <h3>Dodaj użytkownika</h3>
                <form className="form-group" onSubmit={this.handleFormSubmit}>
                    <Input type={'text'}
                           title= {'Imię'}
                           name= {'imie'}
                           value={this.state.newUser.name}
                           placeholder = {'Wpisz imię'}
                           handleChange = {this.handleFirstName}
                    />
                    <Input type={'text'}
                           title= {'Nazwisko'}
                           name= {'Nazwiskoddd'}
                           value={this.state.newUser.lastName}
                           placeholder = {'Wpisz nazwisko'}
                           handleChange = {this.handleLastName}
                    />
                    <Select title={'Płeć'}
                            name={'gender'}
                            options = {this.state.genderOptions}
                            value = {this.state.newUser.gender}
                            placeholder = {'Wybierz płeć'}
                            handleChange = {this.handleInput}
                    />
                    <Input type={'text'}
                           title= {'Miasto'}
                           name= {'miasto'}
                           value={this.state.newUser.name}
                           placeholder = {'Wpisz miasto'}
                           handleChange = {this.handleCity}
                    />
                    <Input type={'text'}
                            title= {'Państwo'}
                            name= {'panstwo'}
                            value={this.state.newUser.name}
                            placeholder = {'Wpisz państwo'}
                            handleChange = {this.handleCountry}
                    />
                    <Button title="Dodaj" onClick={this.props.submit(this.state.newUser)}/>
                </form>
            </div>
        );
    }

}

export default AddForm;
