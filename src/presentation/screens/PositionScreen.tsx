import { StyleSheet, Text, View } from "react-native";

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.greenBox}></View>
            <View style={styles.purpleBox}></View>
            <View style={styles.orangeBox}></View>    
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        // height: 700,
        // width: 300,
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    purpleBox: {
        width: 100,
        height: 100,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        borderWidth: 10,
        position: 'absolute',
        bottom: 0,
    },
    orangeBox: {
        width: 100,
        height: 100,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        borderWidth: 10,   
        position: 'absolute',
        right: 0,
        top: 0,
    },
    greenBox: {
        // width: 100,
        // height: 100,
        borderColor: 'white',
        backgroundColor: 'green',
        // borderWidth: 10,
        // position: 'absolute',
        // bottom: 0,
        // right: 0
        ...StyleSheet.absoluteFillObject
    }
})