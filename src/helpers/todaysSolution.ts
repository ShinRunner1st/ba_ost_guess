import { songs } from "../constants";

let stats = JSON.parse(localStorage.getItem("stats") || "{}");

const epochMs = new Date(2022, 2, 21).valueOf();
const now = Date.now();
const msInDay = 86400000;
const index = Math.floor((now - epochMs) / msInDay);
const random = Math.floor(Math.random() * songs.length);

let tempTodaysSolution = songs[0];

const selectRandomElement = async () => {
  // Check if all elements have been selected, reset if necessary
  if (stats.size === songs.length) {
    stats = [];
  }
  let isOK = false;
  // Find a random element not already selected
  if (Array.isArray(stats)) {
    while (!isOK) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      const randomElement = songs[randomIndex];
      if (!stats.includes(randomElement)) {
        isOK = true;
        tempTodaysSolution = randomElement;
      }
    }
  } else {
    const randomIndex = Math.floor(Math.random() * songs.length);
    tempTodaysSolution = songs[randomIndex];
  }
};
selectRandomElement();

export const todaysSolution = tempTodaysSolution;
// export const todaysSolution = songs[index % songs.length];
