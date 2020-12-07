import React from 'react';
import { TextArea, FormBtn } from '../Components/Form';
import bookIcon from "../assets/index";

const Search = () => {
    return (
        <form>
            <img src={bookIcon} alt="Books Icon" style={{ width: "200px", margin: "0 auto", marginTop: "50px", display: "block" }} />
            <TextArea />
            <FormBtn>
                {/* must add on click */}
                Submit Book
              </FormBtn>
        </form>
    )
};

export default Search;