import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import GoalItems from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enterGoalText) {
    console.log("Add Goal Handler - ", enterGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterGoalText, key: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(goalId) {
    console.log("Delete");
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== goalId);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function cancelAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button
        style={styles.addBtn}
        title="Add New Goal"
        color="#ffc8dd"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoalHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(items) => {
            return (
              <GoalItems
                text={items.item.text}
                id={items.item.key}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 12,
    marginTop: 30,
    backgroundColor: "#bde0fe",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    width: "80%",
  },
  textBtn: {
    width: "20%",
    height: 40,
    borderRadius: 20,
  },
  listContainer: {
    flex: 9,
  },
  goalItem: {
    padding: 12,
    marginVertical: 12,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
  },
  addBtn: {
    height: 80,
    borderColor: "#ffafcc",
    borderRadius: 20,
    borderWidth: 1,
  },
});
