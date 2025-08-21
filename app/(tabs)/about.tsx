import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>StickerSmash App</Text>
      <Text style={styles.text}>
        This is a simple and fun mobile app built as a learning project.
      </Text>
      <Text style={styles.text}>
        You can choose a photo from your phone and add cool stickers to it!
      </Text>
      <Text style={styles.text}>Built with React Native and Expo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
});
