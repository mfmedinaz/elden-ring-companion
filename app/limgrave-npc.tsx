import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { observable } from "@legendapp/state";
import { enableReactComponents } from "@legendapp/state/config/enableReactComponents"
import AsyncStorage from '@react-native-async-storage/async-storage';

enableReactComponents();


export default function LimgraveNPC(this: any) {

    const initialSteps = [
        { id: "0", text: "Talk to White-Faced Varre at the very start of the game, next to The First Step Grace.", done: false },
        { id: "1", text: "Talk to Merchant Kale at the Church of Elleh", done: false },
        { id: "2", text: "After getting access to Torrent, return to Church of Elleh at night to meet Renna (Ranni)", done: false }
    ];

    const [steps, setSteps] = useState(initialSteps)

    function handleChangeStep(nextStep: any) {
        setSteps(steps.map(s => {
            if (s.id === nextStep.id) {
                return nextStep;
            } else {
                return s;
            }
        }));
    }

    const storeData = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("step-key", jsonValue);
        } catch (e) {
            // saving error
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("step-key");
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };

    function getSteps() {
        getData().then(value => setSteps(value));
    }

    useEffect(getSteps, []);

    return (

        <View style={styles.container}>
            {
                steps.map(step => (<View key={step.id} style={styles.checkboxContainer}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#BFA273"
                        unFillColor="#FFFFFF"
                        isChecked={step.done}
                        text={step.text}
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={styles.text}
                        onPress={(isChecked: boolean) => {
                            let nextStep = { id: step.id, text: step.text, done: isChecked }
                            handleChangeStep(nextStep);
                            console.log(nextStep);
                        }}
                    />
                </View>))}
        </View>
    );
}


const changeStep = () => {
    const newStep = { id: "1", text: "Talk to White-Faced Varre at the very start of the game, next to The First Step Grace.", done: false };
    state.steps.set((currentSteps) => [...currentSteps, newStep]);
}

const state = observable({
    steps: [
        { id: "1", text: "Talk to White-Faced Varre at the very start of the game, next to The First Step Grace.", done: false },
        { id: "2", text: "wtf", done: true }
    ],
});


const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        flex: 1,
        backgroundColor: '#0F2B2C',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        color: "white",
    },
    checkboxContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 5,
    },
    text: {
        color: 'white',
        fontSize: 17,
        flexShrink: 1,
    },
    checkedText: {
        color: 'red',
        fontSize: 17,
        flexShrink: 1,
        paddingLeft: 15
    },
});


