import React, { useState } from 'react';
import './EditLibrary.css';


const EditLibrary = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const handleSubmit = (formEvent) => {
        formEvent.preventDefault();
        
        let newSong = {
            title,
            album,
            artist,
            genre,
            releaseDate
        }
        props.handleAddSong(newSong);

        // Reset input boxes to empty strings.
        setTitle('');
        setArtist('');
        setAlbum('');
        setGenre('');
        setReleaseDate('');
    }

    return (

        <form id='add-song-form' onSubmit={handleSubmit}>
            <div className='add-song-div'>
                <input
                    id='song-title' className='add-song-input'
                    placeholder='Song Title' type='text'
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />
                <input
                    id='album-title' className='add-song-input'
                    placeholder='Album Title' type='text'
                    onChange={(event) => setAlbum(event.target.value)}
                    value={album}
                    />
                <input
                    id='artist-name' className='add-song-input'
                    placeholder='Artist Name' type='text'
                    onChange={(event) => setArtist(event.target.value)}
                    value={artist}
                    />
            </div>

            <div className='add-song-div'>
                <input
                    id='song-genre' className='add-song-input'
                    placeholder='Music Genre' type='text'
                    onChange={(event) => setGenre(event.target.value)}
                    value={genre}
                    />
                <input
                    id='song-release-date' className='add-song-input' type='date'
                    onChange={(event) => setReleaseDate(event.target.value)}
                    value={releaseDate}
                />
                <button id='add-song-button' type='submit'>Add Song</button>
            </div>
        </form>

    );
};


export default EditLibrary;
