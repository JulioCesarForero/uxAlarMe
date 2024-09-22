import { StyleSheet, Text, View } from "react-native";

export const FlexScreen = () => {
    return (
        <View style={styles.container}>

            <View style={ styles.box1 } />
            <View style={ styles.box2 } />
            <View style={ styles.box3 } />

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },

    box1: {
        backgroundColor: '#5856D6',
        flex: 1,
    },

    box2: {
        backgroundColor: '#3f3e97',
        flex: 2,

    },  
     
    box3: {
        backgroundColor: '#4d4c8c',
        flex: 3,

    },
});