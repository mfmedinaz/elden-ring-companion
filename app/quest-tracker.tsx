import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import Button from '../components/Button';

const CheatSheetImage = require('../assets/images/cheat-sheet.jpeg');

export default function QuestTracker() {
    return (
        <View style={styles.container}>
            <Button label="Limgrave" destination="limgrave-npc" icon="foundation" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F2B2C',
        //alignItems: 'center',
        //justifyContent: 'center',
        color: "#B99967"
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 0.5,
        resizeMode: "contain",
    },
});