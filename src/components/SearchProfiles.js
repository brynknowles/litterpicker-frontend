
function SearchProfiles({ searchTerm, setSearchTerm }) {
    return (
        <div className="searchbar">
            <input 
                id="search-users"
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchProfiles;
