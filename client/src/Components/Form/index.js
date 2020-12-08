import React from 'react';
import "./style.css";

export function TextArea(props) {
    return (
        <div id="roundedCorners">
            <textarea value={props.value} onChange={props.onChange} rows="1" id="searchBox" />
        </div>
    )
};

export function FormBtn(props) {
    return (
        <input onClick={props.onClick} id="submitBtn" type="submit" />
    )
};