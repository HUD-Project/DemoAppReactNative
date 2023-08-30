import { View, Text, SafeAreaView, StyleSheet, Switch, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Dispatch, SetStateAction, useState } from "react";
import Slider from "@react-native-community/slider";


interface Props {
	xEnabled: Dispatch<SetStateAction<boolean>>;
	yEnabled: Dispatch<SetStateAction<boolean>>;
	sliderXVal: Dispatch<SetStateAction<number>>;
	sliderYVal: Dispatch<SetStateAction<number>>;
	navigation: { navigation: any }
}

const Settings = ({ xEnabled, yEnabled, sliderXVal, sliderYVal, navigation}: Props) => {
	const [isXEnabled, setIsXEnabled] = useState(false);
	const toggleXSwitch = () => {
		xEnabled(!isXEnabled);
		setIsXEnabled(!isXEnabled);
	};
	const [isYEnabled, setIsYEnabled] = useState(false);
	const toggleYSwitch = () => {
		yEnabled(!isYEnabled);
		setIsYEnabled(!isYEnabled);
	};

	const [sliderXValue, setSliderXValue] = useState(1);
	const handleXSlider = (value: number) => {
		console.log(value);
		setSliderXValue(value);
		sliderXVal(value);
	};

	const [sliderYValue, setSliderYValue] = useState(1);
	const handleYSlider = (value: number) => {
		console.log(value);
		setSliderYValue(value);
		sliderYVal(value);
	};

	const styles = getStyles(
		isXEnabled,
		isYEnabled,
		sliderXValue,
		sliderYValue
	);
	return (
		<SafeAreaView style={styles.container}>
			<View style={[styles.container]}>
				<View style={{ flexDirection: "row" }}>
					<Text>Flip X</Text>
					<Switch
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleXSwitch}
						value={isXEnabled}
					/>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Text>Flip Y</Text>
					<Switch
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleYSwitch}
						value={isYEnabled}
					/>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Text>X Stretch</Text>
					<Slider
						style={{ width: "80%" }}
						minimumValue={1}
						maximumValue={4}
						step={0.05}
						value={sliderXValue}
						onValueChange={(newValue) => handleXSlider(newValue)}
					/>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Text>Y Stretch</Text>
					<Slider
						style={{ width: "80%" }}
						minimumValue={1}
						maximumValue={4}
						step={0.05}
						value={sliderYValue}
						onValueChange={(newValue) => handleYSlider(newValue)}
					/>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Button title="Layout" onPress={() => navigation.navigate("Layout")}></Button>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Button title="Widgets" onPress={() => navigation.navigate("Widgets")}></Button>
				</View>
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
};

const getStyles = (
	isXEnabled: boolean,
	isYEnabled: boolean,
	sliderXValue: number,
	sliderYValue: number
) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#5dcdab",
			alignItems: "center",
			justifyContent: "center",
		},

		transformations: {
			transform: [
				{ scaleX: isXEnabled ? -1 * sliderYValue : 1 * sliderYValue },
				{
					scaleY: isYEnabled ? -1 * sliderXValue : 1 * sliderXValue,
				},
			],
		},
	});

export default Settings;
