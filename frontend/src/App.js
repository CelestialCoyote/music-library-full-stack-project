import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TitleBar from './Components/TitleBar/TitleBar';
import SearchBar from './Components/SearchBar/SearchBar';
import EditLibrary from './Components/EditLibrary/EditLibrary';
import MusicTable from './Components/MusicTable/MusicTable';


function App() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        makeGetLibraryRequest();
    }, []);

    const makeGetLibraryRequest = async () => {
        try {
            //let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
            let response = await axios.get('http://localhost:5005/api/songs');
            
            setSongs(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleSearch = (searchString) => {
        if (searchString === '') {
            makeGetLibraryRequest();
        } else {
            let foundMedia = songs.filter((potentialMatch) => {
                if (potentialMatch.title.toLowerCase().includes(searchString.toLowerCase()) ||
                    potentialMatch.album.toLowerCase().includes(searchString.toLowerCase()) ||
                    potentialMatch.artist.toLowerCase().includes(searchString.toLowerCase()) ||
                    potentialMatch.genre.toLowerCase().includes(searchString.toLowerCase()) ||
                    potentialMatch.releaseDate.toLowerCase().includes(searchString.toLowerCase())) {
                    return true;
                }
                else {
                    return false;
                }
            });

            return setSongs(foundMedia);
        }
    };

    const handleAddSong = async (newSong) => {
        try {
            await axios.post(`http://localhost:5005/api/songs/`, newSong)
                .then((response) => {
                    makeGetLibraryRequest();
                });
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleDeleteSong = async (id) => {
        try {
            await axios.delete(`http://localhost:5005/api/songs/${id}`)
                .then((response)=> {
                    setSongs(response.data);
                });
        } catch (err) {
            console.log(err.message);
        }
    }

    return (

        <div className='App'>

            <div id='main-container'>
                <div style={{ width: '100%' }}>
                    <TitleBar />
                </div>

                <div className='centered'>
                    <SearchBar handleSearch={handleSearch} />
                    <EditLibrary handleAddSong={handleAddSong} />
                    <MusicTable mediaData={songs} handleDeleteSong={handleDeleteSong} />
                </div>

            </div>

        </div>
    );

};


export default App;
