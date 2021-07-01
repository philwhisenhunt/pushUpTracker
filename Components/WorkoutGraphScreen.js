import { ViewBase, Text, Button, StyleSheet } from "react-native";
import RepStore from "./..Stores/Repstore";

const totalReps = RepStore.getTotalReps();
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