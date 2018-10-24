import React from 'react';

let country = "polska";

let city = "zabrze";

const API = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + city + "%2C%20" + country + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys%20u=c";

const KEY = "dj0yJmk9OHVLa1c1aDlDemZBJmQ9WVdrOU5tNXVTek0zTnpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wOA--";

class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    weather;

    componentDidMount = () => {

        fetch(API)
            .then(res =>  { return res.json() })
            .then(data => {
                    this.setState({"humidity": data.query.results.channel.atmosphere.humidity, "temp": data.query.results.channel.item.condition.temp})
            });
    };

    render() {
        // const data = this.state.data;
        // console.log(data);
        return (
            <div>
                {/*<div> Temperatura: {this.state.data.results.channel.} </div>*/}
                {console.log(this.state.humidity)}
                {console.log(this.state.temp)}

            </div>
        );
    }

}

export default Weather;
