import { ViewBase, Text, Button, StyleSheet } from "react-native";
import RepStore from "./..Stores/Repstore";

let amount_of_time = 30
const totalReps = RepStore.getTotalReps(amount_of_time);
// Test if above works
const WorkoutGraphScreen = () => {
    return (
        <View>
            <Text>Workout Progress</Text>
                <TouchableOpacity>
                    <Text>30 days</Text>
                    <Text>60 days</Text>
                    <Text>90 days</Text>
                </TouchableOpacity>
        </View>
    )
}

export default WorkoutGraphScreen;