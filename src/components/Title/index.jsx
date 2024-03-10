import { View, Text } from "react-native";

import styles from "./styles";

const Title = ({ title }) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
    </>
  );
};

export default Title;
