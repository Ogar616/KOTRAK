import React from 'react';

class Section extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action active">
                        Lista użytkowników
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">user1<div className="edit"></div><div className="delete">-</div></button>
                    <button type="button" className="list-group-item list-group-item-action">user2<div className="edit"></div><div className="delete">-</div></button>
                    <button type="button" className="list-group-item list-group-item-action">user3<div className="edit"></div><div className="delete">-</div></button>
                    <button type="button" className="list-group-item list-group-item-action">Dodaj nowego użytkownika<div className="add">+</div></button>
                </div>
            </div>
        );
    }
}

export default Section;
