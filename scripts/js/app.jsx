import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./Components/nav.jsx";
import Section from "./Components/section.jsx";
import Footer from "./Components/footer.jsx";

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
