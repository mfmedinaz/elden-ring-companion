import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Link } from "expo-router";

import Button from '../components/Button';

const EldenRingLogo = require('../assets/images/elden-ring-logo.png');

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image source={EldenRingLogo} style={styles.image} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Soft Cap Cheat Sheet" destination="cheat" icon="clipboard-notes" />
        <Button label="NPC Quest Tracker" destination="quest-tracker" icon="checkbox" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F2B2C',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: "#B99967"
  },
  logoContainer: {
    flex: 2,
    paddingTop: 30
  },
  footerContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    aspectRatio: 3,
    resizeMode: 'contain',
  },
});


