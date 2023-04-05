import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const MenuDetails = ({ route }) => {
  const { item: menuItem } = route.params;
  useEffect(() => {
    // Define deep link handler function
    const handleDeepLink = (event) => {
      // Extract the parameters from the deep link data
      const { path, queryParams } = Linking.parse(event.url);
      const { restaurant, itemId } = queryParams;

      // If the deep link is for this component and the item ID matches, navigate to this component
      if (path === 'menu-details' && itemId === item.id) {
        // You can perform any additional logic here, such as fetching new data or updating the UI
      }
    };

    // Register deep link handler function
    Linking.addEventListener('url', handleDeepLink);

    // Remove deep link handler function when the component unmounts
    return () => Linking.removeEventListener('url', handleDeepLink);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.menuItem}>{menuItem.name}</Text>
      <Text style={styles.description}>{menuItem.description}</Text>
      <Text style={styles.ingredients}>
        Ingredients: {menuItem.ingredients.join(', ')}
      </Text>
      <Text style={styles.price}>Price: {'₹' + menuItem.price.toFixed(2)}</Text>
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
});

export default MenuDetails;
