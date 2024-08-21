import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { enableReactComponents } from "@legendapp/state/config/enableReactComponents"
import { collection, addDoc, getDocs, doc, setDoc, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";


enableReactComponents();

export default function LimgraveNPC(this: any) {

    const initialSteps = [
        { id: "0", text: "Not loaded", done: false },
        { id: "33", text: "YEP KEKW", done: false }
    ];

    const initialSetup = async () => {

        setSteps([]);

        const defaultSteps = collection(db, "limgrave/default/quests");

        const q = query(defaultSteps, orderBy("id"));

        const querySnapshot = await getDocs(q);

        const tArray: any[] = [];

        querySnapshot.forEach((doc) => {
            const tStep = { id: doc.id, text: doc.data().text, done: doc.data().done }
            console.log(doc.id, " => ", doc.data());
            console.log("step created ---> ", tStep);
            tArray.push(tStep);
        });
        setSteps(tArray);
    }

    const [steps, setSteps] = useState(initialSteps)

    useEffect(() => {
        initialSetup();
    }, []);

    function handleChangeStep(nextStep: any) {
        setSteps(steps.map(s => {
            if (s.id === nextStep.id) {
                return nextStep;
            } else {
                return s;
            }
        }));
    }

    return (

        <View style={styles.container}>
            <ScrollView>
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
                    </View>))
                }
            </ScrollView>
        </View>
    );
}



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
        width: 365,
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


