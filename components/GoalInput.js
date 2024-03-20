import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  //Định nghĩa state khi nhập text
  const [enteredGoalText, setEnteredGoalText] = useState("");

  //Định nghĩa hàm xử lý khi nhập text vào TextInput
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText); //cập nhật trạng thái của enteredGoalText
  }

  //Định nghĩa hàm xử lý khi nhấn nút Add Goal
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText); //gọi hàm onAddGoal từ App.js
    setEnteredGoalText(""); //làm rông TextInput
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler} //gọi hàm goalInputHandler
          value={enteredGoalText} //hiển thị giá trị của enteredGoalText
        />
        <View style={styles.btnContainer}>
          <View style={styles.Btn}>
            <Button
              title="Add Goal"
              color="#a2d2ff"
              onPress={addGoalHandler} //gọi hàm để thêm vào item mới
            />
          </View>
          <View style={styles.Btn}>
            <Button
              title="Cancel"
              color="#ffafcc"
              onPress={props.onCancel} //gọi hàm để huỷ bỏ
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bde0fe",
  },
  textInput: {
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    width: "80%",
    marginRight: 12,
    color: "#000000",
  },
  Btn: {
    width: "40%",
    height: 40,
    borderRadius: 20,
    marginLeft: 12,
    marginHorizontal: 12,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 12,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
});

export default GoalInput;
