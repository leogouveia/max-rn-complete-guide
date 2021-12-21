import {
  StyleSheet,
  Text,
  Touchable,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

const GoalItem = ({ value, id, onDelete }) => {
  return (
    <TouchableNativeFeedback onPress={() => onDelete(id)}>
      <View style={styles.listItem}>
        <Text>{value}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "white",
    padding: 10,
    paddingVertical: 20,
    borderBottomColor: "#F6F8FA",
    borderBottomWidth: 1,
    height: 70,
    justifyContent: "center",
  },
});

export default GoalItem;
