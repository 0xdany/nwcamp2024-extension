// import { useEffect, useRef, useState } from 'react';

// const genreAudioFiles: any = {
//   happy: ['./music/happy/happy1.mp3', './music/happy/happy2.mp3', './music/happy/happy3.mp3'],
//   sad: ['./music/sad/sad1.mp3', './music/sad/sad2.mp3', './music/sad/sad3.mp3'],
//   romantic: ['./music/romantic/romantic1.mp3', './music/romantic/romantic2.mp3', './music/romantic/romantic3.mp3'],
//   dramatic: ['./music/dramatic/dramatic1.mp3', './music/dramatic/dramatic2.mp3', './music/dramatic/dramatic3.mp3'],
// };

// const getRandomFile = (genre: string) => {
//   const files = genreAudioFiles[genre];
//   const randomIndex = Math.floor(Math.random() * files.length);
//   return files[randomIndex];
// };

// const AudioButton = ({ genre, ...props } : any) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentAudioFile, setCurrentAudioFile] = useState(getRandomFile(genre));
//   const [nextAudioFile, setNextAudioFile] = useState(null);

//   const currentAudioRef = useRef(new Audio(currentAudioFile));
//   const nextAudioRef = useRef(new Audio());

//   const fadeDuration = 1000; // duration in ms for crossfade

//   const crossfade = async () => {
//     // Set up next audio
//     nextAudioRef.current.src = nextAudioFile;
//     nextAudioRef.current.volume = 0;
//     nextAudioRef.current.play();

//     // Fade out current audio and fade in next audio simultaneously
//     for (let i = 0; i <= 1; i += 0.1) {
//       currentAudioRef.current.volume = 1 - i;
//       nextAudioRef.current.volume = i;
//       await new Promise((resolve) => setTimeout(resolve, fadeDuration / 10));
//     }

//     // Stop current audio and swap references
//     currentAudioRef.current.pause();
//     currentAudioRef.current = nextAudioRef.current;
//     setCurrentAudioFile(nextAudioFile);
//     setNextAudioFile(null);  // Reset next audio file
//   };

//   const handleClick = async () => {
//     if (isPlaying) {
//       // Fade out if stopping playback
//       for (let volume = 1; volume >= 0; volume -= 0.1) {
//         currentAudioRef.current.volume = volume;
//         await new Promise((resolve) => setTimeout(resolve, fadeDuration / 10));
//       }
//       currentAudioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       // Play the current audio with fade-in effect
//       currentAudioRef.current.volume = 0;
//       currentAudioRef.current.play();
//       for (let volume = 0; volume <= 1; volume += 0.1) {
//         currentAudioRef.current.volume = volume;
//         await new Promise((resolve) => setTimeout(resolve, fadeDuration / 10));
//       }
//       setIsPlaying(true);
//     }
//   };

//   useEffect(() => {
//     // When the genre changes, set up the next audio file for crossfade
//     const newFile = getRandomFile(genre);
//     setNextAudioFile(newFile);

//     // If currently playing, initiate crossfade
//     if (isPlaying) {
//       crossfade();
//     } else {
//       setCurrentAudioFile(newFile);
//       currentAudioRef.current = new Audio(newFile);
//     }
//   }, [genre]);

//   // Reset `isPlaying` state when audio ends
//   useEffect(() => {
//     const audio = currentAudioRef.current;
//     const handleAudioEnd = () => setIsPlaying(false);
//     audio.addEventListener('ended', handleAudioEnd);

//     return () => {
//       audio.removeEventListener('ended', handleAudioEnd);
//     };
//   }, []);

//   return (
//     <button
//       className={
//         props.className +
//         ' ' +
//         'font-bold py-1 px-4 rounded shadow hover:scale-105 '
//       }
//       onClick={handleClick}>
//       {isPlaying ? 'Pause' : 'Play'} {props.children}
//     </button>
//   );
// };

// export default AudioButton;
