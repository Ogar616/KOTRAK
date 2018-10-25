import React from 'react';

class Select extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: "Mężczyzna"};
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}> {this.props.title} </label>
                <select
                    className="form-control"
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                >
                    <option value="" disabled>{this.props.placeholder}</option>
                    {this.props.options.map(option => {
                        return (
                            <option
                                key={option}
                                value={option}
                                label={option}>{option}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }

}

export default Select;
