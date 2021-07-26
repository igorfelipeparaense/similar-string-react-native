import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    result: {
        display: "flex",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 150,
        borderRadius: 5,
        backgroundColor: "#000000",
        padding: 20,
        boxSixing: "border-box",
        userSelect: "none"
    },
    resultText: {
        fontFamily: "serif",
        fontSize: 24,
        fontStyle: "italic",
        color: "#ffc600",
    }
});
export default styles;