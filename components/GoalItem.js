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
    padding: 10,
    paddingVertical: 20,
    marginVertical: 5,
  },
});

export default GoalItem;
