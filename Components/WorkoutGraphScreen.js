import { ViewBase, Text, Button, StyleSheet } from "react-native";
import RepStore from "./..Stores/Repstore";

let amount_of_time = 30
const totalReps = RepStore.getTotalReps(amount_of_time);
// Test if above works
const WorkoutGraphScreen = () => {
    return (
        <View>
            <Text>Workout Progress</Text>
             
                <TouchableOpacity>30 days</TouchableOpacity>
                <TouchableOpacity>60 days</TouchableOpacity>
                <TouchableOpacity>90 days</TouchableOpacity>
            
        </View>
    )
}

export default WorkoutGraphScreen;