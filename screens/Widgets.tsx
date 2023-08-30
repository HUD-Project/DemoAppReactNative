import { SafeAreaView, Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

interface Props {
  navigation: any;
  selectedWidgets: String[];
  onSelectWidget: any;
}

const Widgets = ({ navigation , selectedWidgets, onSelectWidget }: Props) => {
  const widgets = [
    { id: "circle", label: "Circle" },
    { id: "square", label: "Square" },
    { id: "rectangle", label: "Rectangle" },
  ];
  
  
  const handleWidgetSelection = (widgetId: any) => {
    //
    const updatedSelectedWidgets = selectedWidgets.includes(widgetId)
      ? selectedWidgets.filter((id: any) => id !== widgetId)
      : [...selectedWidgets, widgetId];
    onSelectWidget(updatedSelectedWidgets);
  };

  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <Button title="<" onPress={() => navigation.navigate("Settings")} />
      </View>
      <View style={styles.widgetView}>
        {widgets.map((widget) => (
          <TouchableOpacity
            key={widget.id}
            onPress={() => handleWidgetSelection(widget.id)}
            style={[
              styles.widget,
              selectedWidgets.includes(widget.id) && styles.selectedWidget,
            ]}
          >
            <Text>{widget.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};



const getStyles = () => StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 30,
    alignContent: "center",
    alignItems: "center",
  },
  widget: {
    alignItems: "center",
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    width: 200,
  },
  widgetView: {
    position: "absolute",
    top: 100,
    alignContent: "center",
    alignItems: "center",
    
  },
  buttonView: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  selectedWidget: {
    backgroundColor: "lightblue",
  },
});

export default Widgets;
