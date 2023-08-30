import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Settings from "./screens/Settings";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import Display from "./screens/Display";
import { useState } from "react";
import Layout from "./screens/Layout";
import Widgets from "./screens/Widgets";


const Tab = createBottomTabNavigator();

type IconName = "ios-information-circle" | "ios-information-circle-outline" | "ios-list" | "ios-list-outline" | "tv" | "tv-outline";


export default function App() {
	const [isXEnabled, setIsXEnabled] = useState(false);
	const [isYEnabled, setIsYEnabled] = useState(false);
	const [sliderXValue, setSliderXValue] = useState(1);
	const [sliderYValue, setSliderYValue] = useState(1);
	const [selectedWidgets, setSelectedWidgets] = useState([]);

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
							let iconName: IconName;
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
							} else {
								iconName = "ios-information-circle";
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
						{({navigation}) => (
							<Settings
								xEnabled={setIsXEnabled}
								yEnabled={setIsYEnabled}
								sliderXVal={setSliderXValue}
								sliderYVal={setSliderYValue}
								navigation={navigation}
							/>
						)}
					</Tab.Screen>
					<Tab.Screen
						name="Layout"
						options={{
							tabBarStyle: { display: "none" },
							tabBarButton: () => null
						}}
					>
						{({navigation}) => (
							<Layout
							navigation={navigation}
							selectedWidgets={selectedWidgets}
							/>
						)}
					</Tab.Screen>
					<Tab.Screen name="Widgets" options={{
							tabBarStyle: { display: "none" },
							tabBarButton: () => null}}>
						
						{({navigation}) => (
							<Widgets
							navigation={navigation}
							selectedWidgets={selectedWidgets}
							onSelectWidget={setSelectedWidgets}
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
