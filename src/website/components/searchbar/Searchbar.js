import './searchbar.css'


function SearchBar() {
    return (
        <div className='search-bar-container'>
            <input className='search-bar' placeholder='Search...' /><div><button className='search-button'>Search</button></div>
        </div>
    )
}

export default SearchBar;