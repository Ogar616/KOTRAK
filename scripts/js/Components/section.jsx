import React from 'react';



class Section extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="list-group">
                    <div className="list-group-item list-group-item-action active">
                        Lista użytkowników
                    </div>
                    <div className="list-group-item list-group-item-action">user1<button type="button" className="info">Info</button><button type="button" className="edit" >edycja</button><button type="button" className="delete">-</button></div>
                    <div className="list-group-item list-group-item-action">user2<button type="button" className="info">Info</button><button type="button" className="edit" >edycja</button><button type="button" className="delete">-</button></div>
                    <div className="list-group-item list-group-item-action">user3<button type="button" className="info">Info</button><button type="button" className="edit" >edycja</button><button type="button" className="delete">-</button></div>
                    <div className="list-group-item list-group-item-action">Dodaj nowego użytkownika<div className="add">+</div></div>
                </div>
            </div>
        );
    }
}

export default Section;
