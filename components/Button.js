import { StyleSheet, View, Pressable, Text } from 'react-native';
import { router } from "expo-router";
import { Foundation } from '@expo/vector-icons';

export default function Button({ label, destination, icon }) {
   
        return (
          <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#A7B09A", borderRadius: 18 }]}>
            <Pressable
              style={({ pressed }) => [{backgroundColor: pressed
                ? "#544227"
                : "#BFA273"}, styles.button]
                }
              onPress={() => router.push("/"+destination)}
            > 
              <Foundation name={icon} size={24} color="#050D06" style={styles.buttonIcon} />          
              <Text style={[styles.buttonLabel, { color: "#050D06" }]}>{label}</Text>
            </Pressable>            
          </View>
        );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
