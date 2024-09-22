import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

import { Dimensions } from "react-native";

// const { width, height } = Dimensions.get('window');


export const DimensionScreen = () => {
    const { width, height } = useWindowDimensions();
    return (
        <View>

            <View style={styles.container}>

            <View style={{
                ...styles.purpuleBox,
                width: width * 0.7,
                }}></View>

            </View>

            <Text style={styles.title}>w: {width} x h: {height}</Text>

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        // with: '100%',
        width: 300,
        height: 300,
        backgroundColor: 'red',
    },

    purpuleBox: {
       height: '50%',
        backgroundColor: 'purple',
        width: '50%',
    },

    title:{
        fontSize: 20,
        textAlign: 'center',
    }
})