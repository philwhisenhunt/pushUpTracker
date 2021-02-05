<View style={styles.blueBackground}>
  <View style={styles.loadingBoxTop}>
    <Text style={styles.innerText}>Current: 300</Text>
  </View>
  <View style={styles.loadingBoxBottom}>
    <Text style={styles.innerText}>Goal: 300</Text>
  </View>
</View>;
const styles = StyleSheet.create({
  innerText: {
    color: "white",
    fontSize: 100,
    justifyContent: "center",
  },
  blueBackground: {
    backgroundColor: "skyblue",
    flex: 1,
  },
  loadingBoxTop: {
    flexDirection: "row",
    backgroundColor: "skyblue",
    justifyContent: "center",
    flex: 0.5,
    // alignSelf: "flex-end",
  },
  loadingBoxBottom: {
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "center",
    flex: 0.5,
  },
});
