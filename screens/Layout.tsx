import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

const Layout = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="<" onPress={() => navigation.navigate("Settings")} />
      <View style={styles.circle}></View>
      <View style={styles.square}></View>
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
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
    marginBottom: 20,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
});

export default Layout;
