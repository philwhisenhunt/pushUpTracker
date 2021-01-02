import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const repCounter = ({ title, buttonTitle, repType }) => {
    const [repCount, setRepCount] = useState(10);

    return (
        <>
        <Button
        onPress={() => setRepCount}
        </>
    )
}
