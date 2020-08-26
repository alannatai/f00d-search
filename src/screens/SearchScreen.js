import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newTerm) => setSearchTerm(newTerm)}
      />
      <RestaurantList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
