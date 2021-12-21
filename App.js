import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems/GoalItems";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddGoal = (goal) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        key: Math.random().toString(),
        value: goal,
      },
    ]);
    setIsAddMode(false);
  };

  const handleDeleteGoal = (rowMap, goalId) => {
    closeRow(rowMap, goalId);
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== goalId)
    );
  };

  const handleCancelAddGoal = () => {
    setIsAddMode(false);
  };

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onChange={handleAddGoal}
        onCancel={handleCancelAddGoal}
      />
      <GoalItems
        courseGoals={courseGoals}
        style={styles.listItems}
        onCloseRow={closeRow}
        onDelete={handleDeleteGoal}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  listItems: {
    margin: 20,
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ccc",
    height: 100,
    width: 100,
  },
});
