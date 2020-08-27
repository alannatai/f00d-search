import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const sections = ['$', '$$', '$$$', '$$$$'];

  const filterResultsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
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
      <FlatList
        data={sections}
        keyExtractor={(section) => section}
        renderItem={({ item }) => (
          <RestaurantList
            restaurants={filterResultsByPrice(item)}
            title={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
  restaurantList: {
    height: 300,
  },
});

export default SearchScreen;
