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
	const initialFocus = [];

	// useState and handle function for handling the eyetracking focus of Weather
	// first element decides whether or not the weather is displayed, the second is for the additional info
	const [displayWeather, setDisplayWeather] = useState(initial);
	const handleWeatherInfo = () => {
		setDisplayWeather([displayWeather[0], !displayWeather[1]]);
		const tempArray = [...focusedIndex];
		tempArray[0] = !tempArray[0];
		setFocusedIndex(tempArray);
	};
	initialFocus.push(false);

	// useState and handle function for handling the eyetracking focus of Time
	// first element decides whether or not the time is displayed, the second is for the additional info
	const [displayTime, setDisplayTime] = useState(initial);
	const handleTimeInfo = () => {
		setDisplayTime([displayTime[0], !displayTime[1]]);
		const tempArray = [...focusedIndex];
		tempArray[1] = !tempArray[1];
		setFocusedIndex(tempArray);
	};
	initialFocus.push(false);

	// useState and handle function for handling the eyetracking focus of Notes
	// first element decides whether or not the notes are displayed, the second is for the additional info
	const [displayNotes, setDisplayNotes] = useState(initial);
	const handleNotesInfo = () => {
		setDisplayNotes([displayNotes[0], !displayNotes[1]]);
		const tempArray = [...focusedIndex];
		tempArray[2] = !tempArray[2];
		setFocusedIndex(tempArray);
	};
	initialFocus.push(false);

	const [focusedIndex, setFocusedIndex] = useState(initialFocus);

	const styles = getStyles(
		displayWeather,
		displayTime,
		displayNotes,
		focusedIndex
	);
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
							onPress={handleWeatherInfo}
							onPressIn={handleWeatherInfo}
							onPressOut={handleWeatherInfo}
							style={[
								styles.mainText,
								focusedIndex[0] ? { fontSize: 60 } : null,
							]}
						>
							Weather
						</Text>
						<Text
							style={[
								styles.weatherInfo,
								styles.subText,
								focusedIndex[0] ? { fontSize: 35 } : null,
							]}
						>
							23°
						</Text>
					</View>
					<View style={styles.subContainer}>
						<Text
							onPress={handleTimeInfo}
							onPressIn={handleTimeInfo}
							onPressOut={handleTimeInfo}
							style={[
								styles.mainText,
								focusedIndex[1] ? { fontSize: 60 } : null,
							]}
						>
							Time
						</Text>
						<Text
							style={[
								styles.timeInfo,
								styles.subText,
								focusedIndex[1] ? { fontSize: 35 } : null,
							]}
						>
							{moment().format("LT")}
						</Text>
					</View>
					<View style={styles.subContainer}>
						<Text
							onPress={handleNotesInfo}
							onPressIn={handleNotesInfo}
							onPressOut={handleNotesInfo}
							style={[
								styles.mainText,
								focusedIndex[2] ? { fontSize: 60 } : null,
							]}
						>
							Notes
						</Text>
						<Text
							style={[
								styles.notesInfo,
								styles.subText,
								focusedIndex[2] ? { fontSize: 35 } : null,
							]}
						>
							note1, note2, note3
						</Text>
					</View>
				</View>
				<StatusBar style="auto" />
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

const getStyles = (
	displayWeatherInfo: boolean[],
	displayTimeInfo: boolean[],
	displayNotesInfo: boolean[],
	focusedIndex: boolean[]
) =>
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
			alignItems: "flex-start",
			justifyContent: "center",
		},

		mainText: {
			fontSize: focusedIndex.includes(true) ? 20 : 40,
		},

		subText: {
			fontSize: 25,
		},

		subContainer: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			margin: 0,
			padding: 0,
		},

		weatherInfo: {
			display: displayWeatherInfo[1] ? "flex" : "none",
		},

		timeInfo: {
			display: displayTimeInfo[1] ? "flex" : "none",
		},

		notesInfo: {
			display: displayNotesInfo[1] ? "flex" : "none",
		},
	});

export default Display;
