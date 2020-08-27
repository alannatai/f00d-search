import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import RestaurantDetail from './RestaurantDetail';

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default RestaurantList;
