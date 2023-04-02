const MenuDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>{item.name}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{item.description}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Price: ${item.price.toFixed(2)}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Ingredients:</Text>
      <FlatList
        data={item.ingredients}
        renderItem={({ item }) => <Text style={{ fontSize: 16 }}>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
};
export default MenuDetailsScreen;
