import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Home</Text>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1fffff",
		alignItems: "center",
		justifyContent: "center",
	},
});
export default Home;
