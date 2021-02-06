

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="searchbar">
            <input 
                id="search-bar"
                type="text"
                placeholder="Search cleanups here..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchBar
