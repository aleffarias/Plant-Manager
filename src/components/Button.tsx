import React from 'react';
import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    Text, 
    StyleSheet 
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps ) {
    return (
       <TouchableOpacity 
        style={styles.container}
        {...rest}
        >
           <Text style={styles.text}>
               { title }
           </Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: colors.white,

    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
        paddingHorizontal: 10,
    },
    buttonText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: fonts.heading,
    }
})