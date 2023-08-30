import { Animated, View, PanResponder, SafeAreaView, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";

interface Props {
  navigation: any;
  selectedWidgets: string[];
}

//Animated shape factory function that creates the object and gesture responder/handler
const createAnimatedShape = (xPos: number, yPos: number) => {
  const position = useRef(new Animated.ValueXY({x: xPos, y: yPos})).current;
  //set the initial offset from the starting position
  position.extractOffset();
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      //Animate the movement based off the change in position
      onPanResponderMove: Animated.event(
        [
          null, 
          { dx: position.x, dy: position.y }
        ],
        {useNativeDriver: false}
        ),
      onPanResponderRelease: () => {
        //set the new position
        position.extractOffset();
      },
    })
  ).current;

  return { position, panHandlers: panResponder.panHandlers };
};

const Layout = ({ navigation , selectedWidgets}: Props) => {
  
  const circle = createAnimatedShape(50, 100);
  const square = createAnimatedShape(50, 250);
  const rect = createAnimatedShape(50, 400);

  const styles = getStyles(circle.position, square.position, rect.position);

  return (
    <SafeAreaView style={styles.container}>
      
      {selectedWidgets.includes("circle") && (
        <Animated.View style={styles.circle} {...circle.panHandlers}></Animated.View>
      )}
      {selectedWidgets.includes("square") && (
        <Animated.View style={styles.square} {...square.panHandlers}></Animated.View>
      )}
      {selectedWidgets.includes("rectangle") && (
        <Animated.View style={styles.rect} {...rect.panHandlers}></Animated.View>
      )}
      <View style={styles.button}>
        <Button title="<" onPress={() => navigation.navigate("Settings")}  />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};



const getStyles = (
  circlePos: Animated.ValueXY,
  squarePos: Animated.ValueXY,
  rectPos: Animated.ValueXY
) => StyleSheet.create({
  
  container: {
    
    height: "100%", // Set a fixed height
		backgroundColor: "#af45sd",
    
  },
  button: {
    position: "absolute",
    top: 20,
    left: 20
  },
  circle: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
    transform: [{translateX: circlePos.x}, {translateY: circlePos.y}]
  },
  square: {
    position: "absolute",
    width: 100,
    height: 100,
    backgroundColor: "green",
    transform: [{translateX: squarePos.x}, {translateY: squarePos.y}]
  },
  rect: {
    position: "absolute",
    width: 150,
    height: 75,
    backgroundColor: "blue",
    transform: [{translateX: rectPos.x}, {translateY: rectPos.y}]
  },
});

export default Layout;
