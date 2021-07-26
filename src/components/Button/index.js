import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style.js';

const Button = (props) => {
	return(
		<TouchableOpacity 
			style={styles.button}
			onPress={props.clickBtn}>
			<Text style={styles.buttonText}>Resultado</Text>
		</TouchableOpacity>
	);
}
export default Button;