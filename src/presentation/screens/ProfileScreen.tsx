import { StyleSheet, Text, View } from "react-native";

export const ProfileScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Profile Screen
            </Text>
        </View>
    );
}



const styles = StyleSheet.create( {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 80,
      color: 'black',
      fontWeight: '300',
    },
  } );