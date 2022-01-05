import Runner from './Runner';
const runner = new Runner('.interstitial-wrapper');
runner.initializeHighScore(+localStorage.getItem('highestScore'))