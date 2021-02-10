

function SearchCleanups({ cleanupSearchTerm, setCleanupSearchTerm }) {
    return (
        <div className="searchbar">
            <input 
                id="search-cleanups"
                type="text"
                placeholder="Search by location..."
                value={cleanupSearchTerm}
                onChange={e => setCleanupSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchCleanups;
