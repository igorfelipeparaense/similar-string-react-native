import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../styles/estilo';
import {similar} from '../Compara/index';

function Corpo() {

	const refvol1 = useRef(null),
		refvol2 = useRef(null),
		[resultado, setResultado] = useState(false);

		const clicar = () => {
			const val1 = refvol1.current.value, // valor1.value;
				val2 = refvol2.current.value, // valor2.value;
				res = similar(val1, val2);

			setResultado(res);
		}

	return(
		<View>
			<TextInput ref={refvol1} style={styles.input} placeholder="Digite um nome" />
			<TextInput ref={refvol2} style={styles.input} placeholder="Digite outro nome" />
			<TouchableOpacity onPress={clicar} style={styles.btn}><Text style={styles.textBtn}>Resultado</Text></TouchableOpacity>
			<Text style={styles.result}>{resultado}</Text>
		</View>
	);
};

export default Corpo;