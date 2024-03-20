import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import GoalItems from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  //Định nghĩa state của visible của model
  const [modalIsVisible, setModalIsVisible] = useState(false);
  //Định nghĩa state của courseGoals
  const [courseGoals, setCourseGoals] = useState([]);

  //Đinh nghĩa hàm addGoalHandler
  function addGoalHandler(enterGoalText) {
    console.log("Add Goal Handler - ", enterGoalText);
    //cập nhật trạng thái của courseGoals
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, //thêm mục mới vào cuối bảng
      {
        text: enterGoalText,
        key: Math.random().toString(), //tạo key ngẫu nhiên
      },
    ]);
    setModalIsVisible(false);
  }

  //Đinh nghĩa hàm deleteGoalHandler
  function deleteGoalHandler(goalId) {
    console.log("Delete");
    //cập nhật trạng thái của courseGoals
    setCourseGoals((currentCourseGoals) => {
      return (
        currentCourseGoals
          //lọc ra các mục có key khác với key của mục cần xóa
          .filter((goal) => goal.key !== goalId)
      );
    });
  }

  //Định nghĩa hàm hiện thị AddGoal
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  //Định nghĩa hàm ẩn AddGoal
  function cancelAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button
        style={styles.addBtn}
        title="Add New Goal"
        color="#ffc8dd"
        onPress={startAddGoalHandler} //gọi hàm hiện thị AddGoal
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoalHandler} //gọi hàm ẩn AddGoal
      />
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(items) => {
            return (
              <GoalItems
                text={items.item.text} //truyền text của mục
                id={items.item.key} //truyền key của mục
                onDeleteItem={deleteGoalHandler} //gọi hàm xóa mục
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
