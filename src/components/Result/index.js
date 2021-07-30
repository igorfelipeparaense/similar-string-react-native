import React from 'react';
import { View, Text, Share, Image, TouchableOpacity } from 'react-native';
import styles from './style.js';

const Result = (props) => {

	const onShare = async () => {
		const result = await Share.share({
			message: "Olhe este comparador de Strings!"
		})
	}

	return (
		<View style={styles.result}>
			<Text style={styles.resultText}>{props.children}</Text>
			<View>
				{props.children != "" ?
					<TouchableOpacity onPress={onShare} style={styles.touch}>
						<Image
							style={styles.share}
							source={require('../../../assets/sharing.png')}
						/>
					</TouchableOpacity>
					:
					<View />
				}
			</View>
		</View>
	);
}
export default Result;