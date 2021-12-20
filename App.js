import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

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

  const handleDeleteGoal = (goalId) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== goalId)
    );
  };

  const handleCancelAddGoal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onChange={handleAddGoal}
        onCancel={handleCancelAddGoal}
      />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(goal) => (
          <GoalItem
            value={goal.item.value}
            id={goal.item.key}
            onDelete={handleDeleteGoal}
          />
        )}
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
