import { store, view } from "@risingstack/react-easy-state";

const RepStore2 = store({
  "Push-outs": 0,
  "Pull-ups": 0,
  "Sit-ups": 0,
  "Chin-ups": 0,

  setReps(name, count) {
    this[name] = count;
  },

  get totalReps() {
    return (
      this["Push-ups"] + this["Pull-ups"] + this["Sit-ups"] + this["Chin-ups"]
    );
  },
});

export default RepStore2;
