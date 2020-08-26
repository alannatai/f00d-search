import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

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
