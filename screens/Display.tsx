import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const Display = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Display</Text>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#af45sd",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Display;
