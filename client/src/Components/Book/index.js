import React from 'react';

const Book = ({ title, authors, description, thumbnail }) => {
    return (
        <div className="book-info">
            <p>{title}</p>
            <p>Authors: {authors}</p>
            <img alt={title + " - " + authors} src={thumbnail} />
            <p>
                {description}
            </p>
        </div>
    );
};

export default Book;