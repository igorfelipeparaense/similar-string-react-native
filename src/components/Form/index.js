import React from 'react';
import { View, Text, TextInput, Pressable, Keyboard } from 'react-native';
import styles from './style.js';

const Form = ({nome1, nome2, setNome1, setNome2, errorMessage }) => {
	return (
		<Pressable onPress={Keyboard.dismiss}>
			<View style={styles.form}>
				<Text style={styles.textForm}>Primeiro nome:</Text>
				<Text style={styles.errorMsg}>{errorMessage}</Text>
				<TextInput 
					style={styles.inputForm} 
					onChangeText={setNome1}
					value={nome1}
					placeholder="Ex: Joao"
				/>
				<Text style={styles.textForm}>Segundo nome:</Text>
				<Text style={styles.errorMsg}>{errorMessage}</Text>
				<TextInput 
					style={styles.inputForm} 
					onChangeText={setNome2}
					value={nome2}
					placeholder="Ex: Joao"
				/>
			</View>
		</Pressable>
	)
};

export default Form;