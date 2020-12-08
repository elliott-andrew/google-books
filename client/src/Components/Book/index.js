import React from 'react';
import "./style.css"
import { SaveBtn } from '../Form'

const Book = ({ title, authors, description, thumbnail, saveBook }) => {
    return (
        <div id="allResults">
            <div className="book-info" key={title}>
                <img alt={title + " - " + authors} src={thumbnail} />
                <h2>{title}</h2>
                <h3>{authors}</h3>
                <p>{description ? description : "No desciption found."}</p>
                <SaveBtn onClick={() => {
                    saveBook(title, authors, description, thumbnail)
                }} />
            </div>
        </div>
    );
};

export default Book;