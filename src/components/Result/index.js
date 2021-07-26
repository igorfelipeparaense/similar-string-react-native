import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';

const Result = (props) => {
	return(
		<View style={styles.result}>
			<Text style={styles.resultText}>{props.children}</Text>
		</View>
	);
}
export default Result;