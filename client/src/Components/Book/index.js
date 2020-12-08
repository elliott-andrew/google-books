import React from 'react';
import "./style.css"

const Book = ({ title, authors, description, thumbnail }) => {
    return (
        <div className="book-info" key={title}>
            <img alt={title + " - " + authors} src={thumbnail} />
            <h2>{title}</h2>
            <h3>{authors}</h3>
            <p>{description ? description : "No desciption found."}</p>
        </div>
    );
};

export default Book;