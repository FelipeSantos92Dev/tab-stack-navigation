import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "../screens/Category";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();

const StackNavigator = ({ route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={Category}
        initialParams={{ category: route.params.category }}
      />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
