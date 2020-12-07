import React from 'react';
import "./style.css"

export function TextArea(props) {
    return (
        <div id="roundedCorners">
            <textarea rows="1" id="searchBox" />
        </div>
    )
};

export function FormBtn(props) {
    return (
        <input id="submitBtn" type="submit" />
    )
}