import React, { useState } from 'react';
import { TextArea, FormBtn } from '../Components/Form';
import axios from 'axios'
import bookIcon from "../assets/index";
import Book from "../Components/Book";

const Search = () => {
    const [formObject, setFormObject] = useState(
        {
            title: "",
            results: []
        }
    );

    const handleEventChange = event => {
        setFormObject(
            {
                ...formObject,
                title: event.target.value
            }
        );
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        const REQUESTURL = `https://www.googleapis.com/books/v1/volumes?q=${formObject.title.split(' ').join('+')}`;
        axios.get(REQUESTURL)
            .then(res => setFormObject({ ...formObject, results: res.data.items }))
            .catch(err => console.log(err));
    };

    return (
        <form>
            <img src={bookIcon} alt="Books Icon" style={{ width: "200px", margin: "0 auto", marginTop: "50px", display: "block" }} />
            <TextArea value={formObject.title} onChange={handleEventChange} />
            <FormBtn onClick={handleFormSubmit}>
                {/* must add on click */}
                Submit Book
              </FormBtn>
            {
                formObject.title ?
                    formObject.results.map(book => {
                        return (
                            <Book
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                            />
                        )
                    }) :
                    <p style={{ textAlign: "center", marginTop: "50px" }}>Search above to find information on any book</p>
            }
        </form>
    )
};

export default Search;