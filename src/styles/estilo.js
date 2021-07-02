import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    backgroundColor: '#cecece',
    color: '#0000000',
    width: '100%',
    height: 35,
    border: 'none',
    borderRadius: 50,
    paddingLeft: 10,
    marginTop: 5,
    borderWidth: 1,
  },
  btn: {
    backgroundColor: '#444',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingTop: 14,
    paddingBottom: 14,
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