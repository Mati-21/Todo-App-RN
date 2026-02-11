import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isDarkMode, toggleDarkMode, colors } = useTheme();
  console.log(isDarkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.textSetting}>Todo333</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Mode</Text>
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
