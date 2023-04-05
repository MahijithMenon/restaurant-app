import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const COLORS = {
  primary: '#FF6F61',
  secondary: '#648177',
  textLight: '#FFFFFF',
  textDark: '#2F3E46',
  backgroundLight: '#F2F2F2',
  backgroundDark: '#B8B8B8',
};

const Data = {
  restaurants: [
    {
      name: "Italiano's",
      menu: [
        {
          id: 1,
          name: 'Spaghetti Carbonara',
          description:
            'Spaghetti with bacon, eggs, and Parmesan cheese in a creamy sauce',
          price: 12.99,
          ingredients: [
            'spaghetti',
            'bacon',
            'eggs',
            'Parmesan cheese',
            'heavy cream',
            'garlic',
          ],
        },
        {
          id: 2,
          name: 'Margherita Pizza',
          description:
            'Pizza with tomato sauce, mozzarella cheese, and fresh basil',
          price: 10.99,
          ingredients: [
            'pizza dough',
            'tomato sauce',
            'mozzarella cheese',
            'fresh basil',
          ],
        },
        {
          id: 3,
          name: 'Chicken Parmesan',
          description:
            'Breaded chicken breast with tomato sauce and melted mozzarella cheese, served with spaghetti',
          price: 15.99,
          ingredients: [
            'chicken breast',
            'breadcrumbs',
            'tomato sauce',
            'mozzarella cheese',
            'spaghetti',
          ],
        },
      ],
    },
    {
      name: 'Sushi Palace',
      menu: [
        {
          id: 1,
          name: 'Rainbow Roll',
          description:
            'California roll topped with tuna, salmon, shrimp, and avocado',
          price: 16.99,
          ingredients: [
            'sushi rice',
            'nori',
            'avocado',
            'tuna',
            'salmon',
            'shrimp',
          ],
        },
        {
          id: 2,
          name: 'Spicy Tuna Roll',
          description: 'Tuna and spicy mayo rolled in sushi rice and seaweed',
          price: 12.99,
          ingredients: ['sushi rice', 'nori', 'tuna', 'spicy mayo'],
        },
        {
          id: 3,
          name: 'Teriyaki Chicken',
          description:
            'Grilled chicken with teriyaki sauce, served with rice and vegetables',
          price: 14.99,
          ingredients: [
            'chicken breast',
            'teriyaki sauce',
            'rice',
            'vegetables',
          ],
        },
      ],
    },
    {
      name: 'Taco Town',
      menu: [
        {
          id: 1,
          name: 'Beef Tacos',
          description:
            'Soft tortillas filled with seasoned ground beef, lettuce, and cheese',
          price: 9.99,
          ingredients: [
            'taco shells',
            'ground beef',
            'lettuce',
            'cheese',
            'tomatoes',
          ],
        },
        {
          id: 2,
          name: 'Chicken Quesadilla',
          description:
            'Flour tortilla filled with grilled chicken, cheese, and peppers, served with sour cream and guacamole',
          price: 12.99,
          ingredients: [
            'flour tortilla',
            'grilled chicken',
            'cheese',
            'peppers',
            'sour cream',
            'guacamole',
          ],
        },
      ],
    },
  ],
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const renderRestaurant = ({ item }) => {
    return (
      <View style={styles.restaurantBox}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <FlatList
          data={item.menu}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MenuDetails', { item })}
              style={styles.menuItemBox}
            >
              <Text style={styles.menuItemName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={Data.restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 20,
  },
  restaurantBox: {
    backgroundColor: COLORS.backgroundDark,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textLight,
    marginBottom: 10,
  },
  menuItemBox: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 10,
  },
  menuItemDescription: {
    fontSize: 16,
    color: COLORS.textDark,
    marginBottom: 10,
  },
  menuItemIngredients: {
    fontSize: 14,
    color: COLORS.textDark,
    marginBottom: 10,
  },
  menuItemPrice: {
    fontSize: 16,
    color: COLORS.textDark,
    fontWeight: 'bold',
  },
});
export default HomeScreen;
