import React from "react";
import {View, Text, StyleSheet} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Step = () => {
    return (
        <BouncyCheckbox
                    size={25}
                    fillColor="#BFA273"
                    unFillColor="#FFFFFF"
                    isChecked={step.done}
                    text={step.text}
                    iconStyle={{ borderColor: "red" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={styles.text}
                />
    )
}