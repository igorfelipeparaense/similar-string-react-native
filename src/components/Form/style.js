import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    form: {
        backgroundColor: "#347480",
        width: 300,
        padding: 10,
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 20,
    },
    textForm: {
        fontFamily: "serif",
        fontWeight: "bold",
        fontSize: 18,
    },
    inputForm: {
        width: "90%",
        height: 40,
        backgroundColor: "#f6f6f6",
        borderRadius: 50,
        margin: 12,
        marginTop: 0,
        paddingLeft: 10
    },
    errorMsg: {
        fontSize: 14,
        fontWeight: "bold",
        color: "red",
        marginBottom: 3
    }
});
export default styles;