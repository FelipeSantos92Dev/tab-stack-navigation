import { View, Text } from "react-native";

import styles from "./styles";

function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

export default DetailScreen;
