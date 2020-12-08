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

    const unsave = id => {
        axios.delete("api/books" + id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
};

export default Saved;