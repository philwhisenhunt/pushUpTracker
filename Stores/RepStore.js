import { store, view } from "@risingstack/react-easy-state";
import AsyncStorage from "@react-native-community/async-storage";
import { observe } from "@nx-js/observer-util";

const RepStore = store({
  
  "Push-up": 0,
  "Pull-up": 0,
  "Sit-up": 0,
  "Chin-up": 0,
  "Squat to Press": 0,
  "Kettlebell Swing": 0,
  "Dumbbell Bicep Curls": 0,
  "Barbell Bicep Curls": 0,
  "Widegrip Pull-down": 0,
  "Standing Pull-down": 0,
  "Squat to Press": 0,
  "Kettlebell Snatch": 0,
  "Kettlebell Clean": 0,
  "Kettlebell Shrug": 0,

  repGoal: 300,
  updated_at: null,

  isHydrated: false,
  persistableFields: ["Push-up", "Pull-up", "Sit-up", "Chin-up", "Squat to Press", "Kettlebell Swing","Dumbbell Bicep Curls", "Barbell Bicep Curls", "Widegrip Pull-down", "Standing Pull-down", "Squat to Press", "Kettlebell Snatch", "Kettlebell Clean", "Kettlebell Shrug"],

  setReps(name, count) {
    this[name] = count;
    this.updated_at = new Date();
  },

  getGoal() {
    console.log(this.repGoal);
    return this.repGoal;
  },

  setGoal(count) {
    console.log("Made it into setGoal, and the count is: " + count);
    // debugger;

    this.repGoal = count;
    this.updated_at = new Date();
    console.log("The repGoal is: " + this.repGoal);
  },

  getTotalReps(amount_of_time){
    // access db and count up total reps of each category 
    return this["Push-up"] + this["Pull-up"] + this["Sit-up"] + this["Chin-up"];

  },

  resetCheck() {
    //Grab the current time
    console.log(this.updated_at);
    const now = new Date();

    //compare it to the updated_at piece of RepStore
    // console.log();
    if (datesAreOnSameDay(now, this.updated_at)) {
      alert("Let it be");
    } else {
      alert("whole new day, so reset");
      this.setReps("Push-up", 0);
      this.setReps("Pull-up", 0);
      this.setReps("Sit-up", 0);
      this.setReps("Chin-up", 0);
    }
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
  // console.log("Got into observe");
  AsyncStorage.setItem("REP_STORE", JSON.stringify(RepStore));
});
export default RepStore;

const datesAreOnSameDay = (first, second) =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();
