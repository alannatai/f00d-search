import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import yelp from '../api/yelp';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'toronto',
      },
    });
    setRestaurants(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={searchApi}
      />
      <Text>We found {restaurants.length} restaurants.</Text>
      <RestaurantList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
