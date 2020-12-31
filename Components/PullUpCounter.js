import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const PullUpCounter = ({ title, buttonTitle }) => {
    const [pullupCount, setPullupCount] = useState(10);

    return (
        <>
        <Text>{title}</Text>
    )
};
