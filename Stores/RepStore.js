import { store, view } from "@risingstack/react-easy-state";
import AsyncStorage from "@react-native-community/async-storage";
import { observe } from "@nx-js/observer-util";
import repCounter from "../Components/RepCounter";
const RepStore = store({
  //Eventually, this should be seeded with stuff from the API
  "Push-up": 0,
  "Pull-up": 0,
  "Sit-up": 0,
  "Chin-up": 0,
  repGoal: 300,

  isHydrated: false,
  persistableFields: ["Push-up", "Pull-up", "Sit-up", "Chin-up"],

  setReps(name, count) {
    this[name] = count;
  },

  get totalReps() {
    return this["Push-up"] + this["Pull-up"] + this["Sit-up"] + this["Chin-up"];
  },
});

export const hydrate = async () => {
  const stringData = await AsyncStorage.getItem("REP_STORE");
  const data = JSON.parse(stringData);

  for (const [key, value] of Object.entries(data)) {
    if (RepStore.persistableFields.includes(key)) {
      RepStore.setReps(key, value);
    }
  }
  RepStore.isHydrated = true;
  console.log(JSON.stringify(RepStore));
};
// setTimeout(() => {
//   hydrate();
// }, 3000);
hydrate();

// Observe every change made to repStore and saving it to local storage.
observe(() => {
  console.log("Got into observe");
  AsyncStorage.setItem("REP_STORE", JSON.stringify(RepStore));
});
export default RepStore;
