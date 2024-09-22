import { StyleSheet, Text, View } from "react-native";

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Box Object Screen</Text> */}

            <View style={styles.purpuleBox}></View>
            <View style={styles.purpuleBox}>
                <Text style={{color: 'white'}}>Hola Mundo</Text>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 30,
        paddingHorizontal: 30,
        paddingVertical: 30,

        
        borderWidth: 10,
    },

    purpuleBox: {
        // flex: 1,
        height: 30,
        backgroundColor: 'purple',
        // margin: 20,
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 5,

    }
})