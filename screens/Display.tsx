import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import moment from "moment";

const handleDisplayExit = async (
	displayBack: boolean,
	setDisplayBack: React.Dispatch<React.SetStateAction<boolean>>
) => {
	setDisplayBack(!displayBack);
	console.log("done 1");
	await new Promise((r) => setTimeout(r, 2000));
	setDisplayBack(displayBack);
	console.log("done 2");
};

const Display = ({ navigation }: { navigation: any }) => {
	const initial = [false, false];
	const [displayBack, setDisplayBack] = useState(true);
	const [displayWeather, setDisplayWeather] = useState(initial);
	const handleWeatherInfo = () => {
		setDisplayWeather([displayWeather[0], displayWeather[1]]);
	};
	console.log(displayWeather);
	const styles = getStyles(displayWeather);
	return (
		<TouchableWithoutFeedback
			onPress={async () => {
				//handleDisplayExit(displayBack, setDisplayBack);
			}}
		>
			<SafeAreaView style={styles.mainContainer}>
				<Text>Display</Text>
				<View
					style={[
						{ alignSelf: "flex-start" },
						{ display: displayBack ? "flex" : "flex" },
					]}
				>
					<Button
						title="<"
						onPress={() => navigation.navigate("Home")}
					/>
				</View>
				<View style={styles.container}>
					<View style={styles.subContainer}>
						<Text
							onPressIn={handleWeatherInfo}
							onPressOut={handleWeatherInfo}
						>
							Weather
						</Text>
						<Text style={styles.weatherInfo}>23°</Text>
					</View>
					<View style={styles.subContainer}>
						<Text>Time</Text>
						<Text>{moment().format("LT")}</Text>
					</View>
					<View style={styles.subContainer}>
						<Text>Notes</Text>
						<Text>note1, note2, note3</Text>
					</View>
				</View>
				<StatusBar style="auto" />
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

const getStyles = (displayWeatherInfo: boolean[]) =>
	StyleSheet.create({
		mainContainer: {
			flex: 1,
			backgroundColor: "#af45sd",
			alignItems: "center",
			justifyContent: "flex-start",
		},

		container: {
			flex: 1,
			flexDirection: "row",
			backgroundColor: "#af45sd",
			alignItems: "center",
			justifyContent: "center",
		},

		subContainer: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
		},

		weatherInfo: {
			display: { displayWeatherInfo } ? "flex" : "none",
		},
	});

export default Display;
