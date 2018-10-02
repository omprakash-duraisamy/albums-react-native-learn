// Import a library to create a component
import React from 'react';
import { Text, View } from 'react-native';

//Create a component
const Header = (props) => {
    const { textStyle, ViewStyle } = styles;
    return (
    <View style={ViewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles = {
    ViewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 3,
        position: 'relative'
    },
    textStyle: {
        fontSize: 50
    }
};

//Make the component available to other parts of the app
export default Header;
