import { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setSearchTerm(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setSearchTerm("");

    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="search-bar">

  <div className="search-form">

    <input
      type="text"
      placeholder="Search by tool name or category..."
      value={searchTerm}
      onChange={handleChange}
      aria-label="Search Tools"
      className="search-input"
    />

    <button
      type="button"
      onClick={handleClear}
      className="clear-btn"
    >
      Clear
    </button>

  </div>

</div>
  );
};

export default SearchBar;