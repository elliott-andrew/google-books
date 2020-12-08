import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from "../Components/Book";

const Saved = () => {
    const [saved, setSaved] = useState(
        {
            books: []
        }
    )
    useEffect(() => {
        axios.get("api/books")
            .then(res => {
                setSaved({ ...saved, books: res.data })
            })
            .catch(err => console.log(err));
    });

    return (
        <>
            <h2>Saved</h2>
            { saved.length > 0 ?
                saved.books.map(book => {
                    return (
                        <Book
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            thumbnail={book.image}
                            saved={true}
                        />
                    )
                }) :
                <p>No saved books.</p>
            }
        </>
    )
};

export default Saved;