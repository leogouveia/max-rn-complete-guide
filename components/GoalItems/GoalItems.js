import { StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import GoalItem from "./GoalItem";
import LeftSwipeOptions from "./LeftSwipeOptions";

const GoalItems = ({ courseGoals, onCloseRow, onDelete }) => {
  return (
    <SwipeListView
      style={styles.swipeListContainer}
      data={courseGoals}
      keyExtractor={(item) => item.key}
      renderItem={(goal) => (
        <GoalItem value={goal.item.value} id={goal.item.key} />
      )}
      renderHiddenItem={(rowData, rowMap) => (
        <LeftSwipeOptions
          data={rowData}
          rowMap={rowMap}
          onCloseRow={onCloseRow}
          onDelete={onDelete}
        />
      )}
      // leftOpenValue={50}
      rightOpenValue={-150}
      disableRightSwipe
      stopLeftSwipe={50}
      stopRightSwipe={-200}
    />
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    margin: 20,
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ccc",
    height: 100,
    width: 100,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});
