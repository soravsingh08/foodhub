import SearchBar from "./SearchBar";
import RestaurantList from "./RestaurantList";
import useRestaurantData from "../utils/useRestaurantData";
import UseOnlineStatus from "../utils/UseOnlineStatus";

const Body = () => {

  //calling hook
  const {
    cards,
    searchText,
    setSearchText,
    handleSearch,
    handleTopRated,
    isTopRatedOn,
  } = useRestaurantData();


  const onlineStatus = UseOnlineStatus()
 if (!onlineStatus) {
  return (
    <div className="offline-container">
      <div className="offline-card">
        <span className="offline-icon">📡</span>
        <h1>You’re offline</h1>
        <p>
          Please check your internet connection and try again.
        </p>
      </div>
    </div>
  );
  }else
  return (
    <div className="body">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={handleSearch}
        onTopRated={handleTopRated}
        isTopRatedOn={isTopRatedOn}
      />

      <RestaurantList cards={cards} />
    </div>
  );
};
//readme update x2 cuz preparign for interview

export default Body;