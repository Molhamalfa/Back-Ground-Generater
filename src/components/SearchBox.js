import React from "react";

const SearchBox = ({searchField, searchChange}) => {

      return (
        <div className="pa2">
        <input className=
        "tc bg-light-blue br3 dib pa3 grow ma2 shadow-5"
         type="search"
        placeholder="search robots" 
          onChange={searchChange}
        />

        </div>

      );    
 

}

export default SearchBox;