import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//https://rallycoding.herokuapp.com/api/music_albums

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('http://192.168.1.10:8082/')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );  
    }
}

export default AlbumList;