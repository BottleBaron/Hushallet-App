import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Components/Home";
//hej
const Tab = createMaterialBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Screen name="Home" component={Home} />
		</NavigationContainer>
	);
}

