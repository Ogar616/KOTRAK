import React from 'react';

class UserInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            humidity: 0
        }
    }

    componentDidMount = () => {

        const API = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + this.props.city + "%2C%20" + this.props.country + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys%20u=c";

        fetch(API)
            .then(res =>  { return res.json() })
            .then(data => {
                this.setState({"humidity": data.query.results.channel.atmosphere.humidity, "temp": data.query.results.channel.item.condition.temp})
            });
    };

    render() {
    if (this.props.show ==! false){
        return (
            <div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Miasto</th>
                            <th>Kraj</th>
                            <th>Pleć</th>
                            <th>Temperatura</th>
                            <th>Wilgotność</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td key={this.props.users[this.props.chosenUser].index}>{this.props.users[this.props.chosenUser].index}</td>
                            <td>{this.props.users[this.props.chosenUser].firstName}</td>
                            <td>{this.props.users[this.props.chosenUser].lastName}</td>
                            <td>{this.props.users[this.props.chosenUser].city}</td>
                            <td>{this.props.users[this.props.chosenUser].country}</td>
                            <td>{this.props.users[this.props.chosenUser].sex}</td>
                            <td>{this.state.temp}</td>
                            <td>{this.state.humidity}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    else return <div>

    </div>

    }
}

export default UserInfo;
