import { store, view } from "@risingstack/react-easy-state";
import AsyncStorage from "@react-native-community/async-storage";
import { observe } from "@nx-js/observer-util";
import repCounter from "../Components/RepCounter";
const RepStore = store({
  //Eventually, this should be seeded with stuff from the API
  "Push-ups": 0,
  "Pull-ups": 0,
  "Sit-ups": 0,
  "Chin-ups": 0,

  isHydrated: false,
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
