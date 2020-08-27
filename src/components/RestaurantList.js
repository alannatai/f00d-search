import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import RestaurantDetail from './RestaurantDetail';

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Restaurants: {restaurants.length}</Text>
      <FlatList
        horizontal
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return <RestaurantDetail restaurant={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RestaurantList;
