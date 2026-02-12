import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  const todos = useQuery(api.todo.getTodos);

  const addTodo = useMutation(api.todo.addTodo);
  if (todos) console.log(todos);

  return (
    <View style={styles.container}>
      <Text style={styles.textSetting}>Todo333</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({ text: "walk the dog 55555" })}>
        <Text>Add To do</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textSetting: {
    fontSize: 25,
    color: "black",
  },
});
