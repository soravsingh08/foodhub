import SearchBar from "./SearchBar";
import RestaurantMenu from "./RestaurantMenu";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {

  const {
    cards,
    searchText,
    setSearchText,
    handleSearch,
    handleTopRated,
  } = useRestaurantData();

  return (
    <div className="body">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={handleSearch}
        onTopRated={handleTopRated}
      />

      <RestaurantMenu cards={cards} />
    </div>
  );
};

export default Body;
