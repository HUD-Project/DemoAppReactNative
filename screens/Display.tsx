import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

const Display = ({ navigation }: { navigation: any }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Display</Text>
			<Button title="<" onPress={() => navigation.navigate("Home")} />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#af45sd",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
});

export default Display;
