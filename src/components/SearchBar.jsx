// SearchBar ka kaam:
// - input dikhana
// - search button
// - top rated button
// ❌ koi state nahi

const SearchBar = ({
  searchText,
  setSearchText,
  onSearch,
  onTopRated,
 isTopRatedOn, 
}) => {
  return (
    <div className="search-box">
      <div className="search-wrapper">
        <input
          type="search"
          placeholder="Search Food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button onClick={onSearch}>
      <i className="ri-search-line"></i>
        </button>
      </div>

<button
  className="filter"
  onClick={() => {
    console.log(isTopRatedOn);
    onTopRated();
  }}
>
  {isTopRatedOn ? "Show All Restaurants" : "Top Rated Restaurants"}
</button>
    </div>
  );
};

export default SearchBar;
