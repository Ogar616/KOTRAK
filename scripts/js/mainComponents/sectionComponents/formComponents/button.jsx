import React from 'react';

const Button = (props) => {
    console.log(props.style);
    return(
        <button className="btn btn-primary"
                type="submit"
                value="Submit"
            onClick= {props.action}>
            {props.title}
        </button>)
};

export default Button;
