import { store, view } from "@risingstack/react-easy-state";
import AsyncStorage from "@react-native-community/async-storage";
import { observe } from "@nx-js/observer-util";
const RepStore = store({
  //Eventually, this should be seeded with stuff from the API
  "Push-ups": 0,
  "Pull-ups": 0,
  "Sit-ups": 0,
  "Chin-ups": 0,

  persistableFields: ["Push-ups", "Pull-ups", "Sit-ups", "Chin-ups"],

  setReps(name, count) {
    this[name] = count;
  },

  get totalReps() {
    return (
      this["Push-ups"] + this["Pull-ups"] + this["Sit-ups"] + this["Chin-ups"]
    );
  },
});
console.log("Fired once");
// console.log(AsyncStorage.getItem("REP_STORE"));
const hydrate = async () => {
  // console.log(await AsyncStorage.getItem("REP_STORE"));
  const stringData = await AsyncStorage.getItem("REP_STORE");
  const data = JSON.parse(stringData);
  // console.log(data);
  for (const [key, value] of Object.entries(data)) {
    //iterate over the key value pairs of the object
    // console.log(`${key}: ${value}`);
    if (RepStore.persistableFields.includes(key)) {
      RepStore.setReps(key, value);
    }
  }
};
hydrate();
observe(() => {
  console.log("Got into observe");
  AsyncStorage.setItem("REP_STORE", JSON.stringify(RepStore));
});
export default RepStore;
