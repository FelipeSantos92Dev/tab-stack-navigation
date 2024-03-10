import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/routes/tab.routes";

function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
