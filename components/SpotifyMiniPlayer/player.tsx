import React, { useEffect, useState } from 'react'
import styles from './player.module.scss'
import {  LastPlayedSong, CurrentMusic, getAccessToken, getNowPlaying, getRecentlyPlayed, getSpotifyMusicStatus } from '../../spotify/SpotifyAPI'
import CurrentlyPlaying from './currentlyPlaying'
import RecentlyPlayedSong from './lastPlayedSong'


const Player = () => {

    const [currentSong, setCurrentSong] = useState<CurrentMusic | null>()
    const [lastPlayedSong, setLastPlayedSong] = useState<LastPlayedSong | null>()


    useEffect(() => {
        const fetchData = async () => {
            
           const {currentPlaying, recentPlayed} = await getSpotifyMusicStatus()  
           setCurrentSong(currentPlaying)
           setLastPlayedSong(recentPlayed)
  
        };
        // setInterval(() => {
            fetchData();
        //   }, 1000);
       
      }, []);



  return (
    <div className={styles.container}>
        {currentSong 
        ? 
        <CurrentlyPlaying currentSong={currentSong}/> 
        :
        <RecentlyPlayedSong lastPlayedSong={lastPlayedSong}/> }
    </div>
  )
}

export default Player

