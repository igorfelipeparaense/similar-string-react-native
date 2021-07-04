import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    fontWeight: 500,
    color: 'white',
  },
  input: {
    backgroundColor: '#cecece',
    color: '#0000000',
    width: 200,
    height: 35,
    border: 'none',
    marginTop: 5,
    borderRadius: 2,
    paddingLeft: 5,
  },
  btn: {
    width: '70%',
    padding: 10,
    marginLeft: 30,
    backgroundColor: '#1f1f1f',
    border: 'none',
    color: 'white',
    margin: 3,
    fontSize: 20,
    borderRadius: 40,
    marginTop: 5,
  },
  textBtn: {
    color: 'white',
    fontSize: 20,
  },
  result: {
    marginTop: 10,
    color: 'white',
    fontSize: 20,
  }
});

export default styles;