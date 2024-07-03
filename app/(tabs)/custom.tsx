import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Alert, StyleSheet } from "react-native";
import { Button, Text, Theme, View } from "tamagui";

export default function Custom() {
    return (
        
        <View backgroundColor="$background" flex={1} height="auto" justifyContent="center" alignItems="center">
            <Text style={styles.text}>
                This is custom page
            </Text>
            {/* <Button color="green" onPress={()=> alert("Hello ehtisham")} title="Say Hello"/> */}
            <Button width="$15"style={{width : "90%"}} onPress={()=> Alert.alert("Hi" , "Ihtisham Afzal")}>Hello world</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { display: "flex", flex: 1, flexDirection: "column", height: "auto", justifyContent: "center", alignItems: "center" },
    text : {
        color : "green"
    }
})
