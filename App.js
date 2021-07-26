import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/index';
import Form from './src/components/Form/index';
import Result from './src/components/Result/index';
import Button from './src/components/Button/index';
import { similar } from './src/components/Compara/index';

export default function App() {

  const [nome1, setNome1] = useState(''),
    [nome2, setNome2] = useState(''),
    [result, setResult] = useState(false);

  const clickBtn = () => {
    let res = similar(nome1, nome2);

    if (nome1 !== '' && nome2 !== '') {
      setResult(res);
    } else {
      setResult('Preencha os dois campos!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Title />
        <Form {...{ setNome1, setNome2 }} />
        <Button clickBtn={clickBtn} />
        <Result>
          {result}
        </Result>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  center: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#cecece",
    width: 400,
    height: 600,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20
  }
});
