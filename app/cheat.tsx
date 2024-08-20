import { StyleSheet, Text, View, Image } from "react-native";

const CheatSheetImage = require('../assets/images/cheat-sheet.jpeg');

export default function Cheat() {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={CheatSheetImage} />
            </View>
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