import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'walk the line', duration: '3.45'},
        {title: 'first day of my life', duration: '6.25'},
        {title: 'the flying Dutchmen', duration: '9.59'},
        {title: '7 & 7s', duration: '3.48'},
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SELECT_SONG'){
        return action.payload;
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})