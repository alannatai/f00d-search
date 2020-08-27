import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';

import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterResultsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <ScrollView>
        <RestaurantList restaurants={filterResultsByPrice('$')} title={'$'} />
        <RestaurantList restaurants={filterResultsByPrice('$$')} title={'$$'} />
        <RestaurantList
          restaurants={filterResultsByPrice('$$$')}
          title={'$$$'}
        />
        <RestaurantList
          restaurants={filterResultsByPrice('$$$$')}
          title={'$$$$'}
        />
      </ScrollView>
    </>
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
