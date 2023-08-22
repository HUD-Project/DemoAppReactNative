import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Settings from "./screens/Settings";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import Display from "./screens/Display";
import { useState } from "react";

const Tab = createBottomTabNavigator();

export default function App() {
	const [isXEnabled, setIsXEnabled] = useState(false);
	const [isYEnabled, setIsYEnabled] = useState(false);
	const [sliderXValue, setSliderXValue] = useState(1);
	const [sliderYValue, setSliderYValue] = useState(1);

	const styles = getStyles(
		isXEnabled,
		isYEnabled,
		sliderXValue,
		sliderYValue
	);
	return (
		<View style={[{ flex: 1 }, styles.transformations]}>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;
							if (route.name === "Home") {
								iconName = focused
									? "ios-information-circle"
									: "ios-information-circle-outline";
							} else if (route.name === "Settings") {
								iconName = focused
									? "ios-list"
									: "ios-list-outline";
							} else if (route.name === "Display") {
								iconName = focused ? "tv" : "tv-outline";
							}
							return (
								<Ionicons
									name={iconName}
									size={size}
									color={color}
								/>
							);
						},
						tabBarActiveTintColor: "tomato",
						tabBarInactiveTintColor: "grey",
						headerShown: false,
					})}
				>
					<Tab.Screen name="Home" component={Home} />
					<Tab.Screen
						name="Display"
						component={Display}
						options={{
							tabBarStyle: { display: "none" },
						}}
					/>
					<Tab.Screen name="Settings">
						{() => (
							<Settings
								xEnabled={setIsXEnabled}
								yEnabled={setIsYEnabled}
								sliderXVal={setSliderXValue}
								sliderYVal={setSliderYValue}
							/>
						)}
					</Tab.Screen>
				</Tab.Navigator>
			</NavigationContainer>
		</View>
	);
}

const getStyles = (
	isXEnabled: boolean,
	isYEnabled: boolean,
	sliderXValue: number,
	sliderYValue: number
) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#fff",
			alignItems: "center",
			justifyContent: "center",
		},

		transformations: {
			transform: [
				{ scaleX: isXEnabled ? -1 / sliderYValue : 1 / sliderYValue },
				{
					scaleY: isYEnabled ? -1 / sliderXValue : 1 / sliderXValue,
				},
				{ skewX: "0deg" },
				{ rotateY: "0deg" },
			],
		},
	});
