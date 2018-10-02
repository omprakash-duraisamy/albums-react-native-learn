// Import a library to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header, AlbumList } from './src/components/Index';

//Create a component
const App = () => (
<View style={{ flex: 1 }}>
    <Header headerText={'SwiftLedger'} />
    <AlbumList />
</View>
);


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
