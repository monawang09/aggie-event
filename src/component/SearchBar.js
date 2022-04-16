import React, { useState } from 'react';
import "./SearchBar.css";


function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  return <div>
  <input className="events_page_format"
   type="text"
   placeholder = "Search for organizations, event name, dates,"
   value = {searchInput}/>
  </div>
};
export default SearchBar;