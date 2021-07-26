import React from 'react';
import { View, Text } from 'react-native';
import styles from './style.js';

const Title = () => {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>SIMILAR STRING</Text>
        </View>
    );
}
export default Title;