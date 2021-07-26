import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style.js';

const Form = ({ setNome1, setNome2 }) => {
	return (
		<View>
			<View style={styles.form}>
				<Text style={styles.textForm}>Primeiro nome:</Text>
				<TextInput style={styles.textFormInput} onChange={(e) => setNome1(e.target.value)} type="text"></TextInput>
			</View>
			<View style={styles.form}>
				<Text style={styles.textForm}>Segundo nome:</Text>
				<TextInput style={styles.textFormInput} onChange={(e) => setNome2(e.target.value)} type="text"></TextInput>
			</View>
		</View>
	)
};

export default Form;