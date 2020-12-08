import React from 'react';
import "./style.css";

export function TextArea(props) {
    return (
        <div id="roundedCorners">
            <textarea value={formObject.title} onChange={handleChange} rows="1" id="searchBox" />
        </div>
    )
};

export function FormBtn(props) {
    return (
        <input onClick={handleFormSubmit} id="submitBtn" type="submit" />
    )
};