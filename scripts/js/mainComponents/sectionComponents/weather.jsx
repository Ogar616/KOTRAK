import React from 'react';
const API = "https://weather-ydn-yql.media.yahoo.com/forecastrss?w=2502265";
const KEY = "dj0yJmk9OHVLa1c1aDlDemZBJmQ9WVdrOU5tNXVTek0zTnpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wOA--";

class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weather: []
        }

    }

    weather;

    componentDidMount = () => {

    let result;
    let result2;

        fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
            .then(res => res.json())
            .then(json => {
                    this.setState({ weather: json.result }, () => {console.log("SDsd")});
                    console.log(json);

                this.weather = json.parse(result2);
                result = json;
            }

            );

        this.setState({aaa: "dsd" });
        console.log("result" + result);
        console.log("state" + this.state.weather);
        console.log("weather::" + this.weather + "ebnd");
        console.log(result2);
    };

    render() {
        return (
            <div>
Pogoda
                {this.weather}
            </div>
        );
    }

}

export default Weather;
