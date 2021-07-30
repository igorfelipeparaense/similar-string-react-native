import React, { useState } from 'react';
import { StyleSheet, View, Vibration, ScrollView, RefreshControl } from 'react-native';
import Title from './src/components/Title/index';
import Form from './src/components/Form/index';
import Result from './src/components/Result/index';
import Button from './src/components/Button/index';
import { similar } from './src/utils/Compara/index';

export default function App() {

  const [nome1, setNome1] = useState(null),
    [nome2, setNome2] = useState(null),
    [result, setResult] = useState(false),
    [errorMessage, setErrorMessage] = useState(null),
    [refresh, setRefresh] = useState(false);

  const atualizar = () => {
    setRefresh(true);

    setResult(false);
    setNome1(null);
    setNome2(null);
    setErrorMessage(null);

    setTimeout(() => { setRefresh(false) }, 300);
  }

  const clickBtn = () => {
    let res = similar(nome1?.length, nome2?.length);

    if (nome1 !== null && nome2 !== null) {
      setResult(res);
      setNome1(null);
      setNome2(null);
      setErrorMessage(null);
    } else {
      Vibration.vibrate();
      setErrorMessage("campo obrigatório*");
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={atualizar} />} >
        <Title />
        <View style={styles.center}>
          <Form {...{ nome1, nome2, setNome1, setNome2, errorMessage }} />
          <Button clickBtn={clickBtn} />
          <Result>
            {result}
          </Result>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    paddingTop: 60
  },
  center: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#cecece",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 23,
    padding: 10,
  }
});
