import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import yelp from '../api/yelp';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'toronto',
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong :(');
    }
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      <Text>We found {restaurants.length} restaurants.</Text>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <RestaurantList />
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
});

export default SearchScreen;
