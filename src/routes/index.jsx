import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
