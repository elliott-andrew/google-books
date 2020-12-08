import React from 'react';

const Book = ({ title, authors, description, thumbnail }) => {
    return (
        <div className="book-info" key={title}>
            <h2>{title}</h2>
            <h3>{authors}</h3>
            <p>{description}</p>
            <img alt={title + " - " + authors} src={thumbnail} />
        </div>
    );
};

export default Book;