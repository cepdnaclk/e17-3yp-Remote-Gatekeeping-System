import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.4}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: 150,
    alignItems: "center",
  },
  buttonText: {
    color: "#8A8989",
    fontSize: 18,
  },
});

export default CustomButton;
