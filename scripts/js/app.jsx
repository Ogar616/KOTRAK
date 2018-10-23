import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./mainComponents/nav.jsx";
import Section from "./mainComponents/section.jsx";
import Footer from "./mainComponents/footer.jsx";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nav: 'list'
        }
    }

    render() {
        return (
            <div>
                <Nav/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
