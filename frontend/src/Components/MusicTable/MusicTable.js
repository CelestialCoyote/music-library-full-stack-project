import './MusicTable.css';


const MusicTable = (props) => {

    return (
        <table className='music-table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Song<br></br>Title</th>
                    <th>Album<br></br>Title</th>
                    <th>Artist /<br></br>Group</th>
                    <th>Genre</th>
                    <th>Release<br></br>Date</th>
                    <th>Delete<br></br>Song</th>
                </tr>
            </thead>
            <tbody>
                {props.mediaData.map((entry, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.title}</td>
                            <td>{entry.album}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.genre}</td>
                            <td>{entry.releaseDate}</td>
                            <td><button
                                className='delete-button'
                                onClick={() => props.handleDeleteSong(entry.id)}
                            >Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};


export default MusicTable;
