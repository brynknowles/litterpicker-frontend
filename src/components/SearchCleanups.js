

function SearchCleanups({ searchTerm, setSearchTerm }) {
    return (
        <div className="searchbar">
            <input 
                id="search-bar"
                type="text"
                placeholder="Search by location..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchCleanups;