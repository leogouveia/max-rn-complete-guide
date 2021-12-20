import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onChange, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    onChange(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="overFullScreen"
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal."
          onChangeText={goalInputHandler}
          onSubmitEditing={handleAddGoal}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="CANCEL" color="orange" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={handleAddGoal}
              disabled={!enteredGoal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
