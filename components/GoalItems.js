import { View, Text, StyleSheet, Button, Pressable } from "react-native";

function GoalItems(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.goalItem}>
        <Text>{props.text}</Text>
      </View>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={styles.btnItem}
        onPress={props.onDeleteItem.bind(this, props.id)} //gọi hàm xoá mục bên App.js
      >
        <Text style={styles.itemText}>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  goalItem: {
    padding: 12,
    marginVertical: 12,
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 6,
    width: "70%",
    marginRight: 12,
  },
  btnItem: {
    height: 40,
    borderRadius: 20,
    borderColor: "#ffafcc",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#ffafcc",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    borderRadius: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default GoalItems;
