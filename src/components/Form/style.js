import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    form: {
        display: "flex",
        width: 300,
        height: 80,
        justifyContent: "space-between",
        alignItems: "center",
    },
    textForm: {
        fontFamily: "serif",
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 10
    },
    textFormInput: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: 50,
        borderRadius: 5,
        border: "none",
        fontFamily: "serif",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 8
    }
});
export default styles;