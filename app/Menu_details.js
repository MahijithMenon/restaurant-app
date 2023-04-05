import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const MenuDetails = ({ route }) => {
  const { item, itemID } = route.params;
  const menuItem = JSON.parse(item);
  console.log(menuItem, itemID);
  const menuUrl = `http://localhost:19000/MenuDetails/${itemID}/?item=${item}`;
  const handleCopyLink = () => {
    Clipboard.setString(menuUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.menuItem}>{menuItem.id}</Text>
      <Text style={styles.menuItem}>{menuItem.name}</Text>
      <Text style={styles.description}>{menuItem.description}</Text>
      <Text style={styles.ingredients}>
        Ingredients: {menuItem.ingredients.join(', ')}
      </Text>
      <Text style={styles.price}>Price: {'₹' + menuItem.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.copyLinkButton} onPress={handleCopyLink}>
        <Text style={styles.copyLinkButtonText}>Copy Link</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  ingredients: {
    fontSize: 14,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyLinkButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  copyLinkButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default MenuDetails;
