import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
  return (
    <View style={styles.background}>
      <FontAwesome style={styles.icon} name='search' />
      <TextInput
        style={styles.input}
        placeholder='Search'
        value={searchTerm}
        onChangeText={onSearchTermChange}
        autoCorrect={false}
        onEndEditing={onSearchTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#E5E5E5',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'grey',
    marginHorizontal: 15,
  },
});

export default SearchBar;
