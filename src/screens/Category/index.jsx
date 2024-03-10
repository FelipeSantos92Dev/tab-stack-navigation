import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";

export default function Category({ route, navigation }) {
  const { category } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Detail", { item })}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Title title="Category" />
      <FlatList
        data={category.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
