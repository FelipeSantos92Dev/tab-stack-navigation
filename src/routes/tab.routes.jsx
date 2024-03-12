import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackNavigator from "./stack.routes";
import Profile from "../screens/Profile";
import { categories } from "../data/categories";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      {categories.map((category) => (
        <Tab.Screen
          key={category.id}
          name={category.name}
          component={StackNavigator}
          initialParams={{ category }}
        />
      ))}
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
