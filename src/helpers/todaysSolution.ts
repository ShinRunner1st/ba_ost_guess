import { songs } from "../constants";
//import { Song } from "../types/song";

const getItemS = localStorage.getItem("stats");

// const epochMs = new Date(2022, 2, 21).valueOf();
// const now = Date.now();
// const msInDay = 86400000;
// const index = Math.floor((now - epochMs) / msInDay);
// const random = Math.floor(Math.random() * songs.length);

let tempTodaysSolution = songs[0];

// const selectRandomElement = async () => {
//   // Find a random element not already selected
//   if (getItemS) {
//     const operation = (list1: Song[], list2: Song[], isUnion = false) =>
//       list1.filter(
//         (
//           (set) => (a) =>
//             isUnion === set.has(a.themeNo)
//         )(new Set(list2.map((b) => b.themeNo)))
//       );

//     // Following functions are to be used:
//     const inFirstOnly = operation,
//       inSecondOnly = (list1: Song[], list2: Song[]) =>
//         inFirstOnly(list2, list1);

//     const stats = JSON.parse(getItemS);

//     // Check if all elements have been selected, reset if necessary
//     console.log(stats.length);
//     if (stats.length >= songs.length) {
//       console.log("reset");
//       localStorage.removeItem("stats");
//       const randomIndex = Math.floor(Math.random() * songs.length);
//       tempTodaysSolution = songs[randomIndex];
//       return;
//     }

//     const solu = stats.map((x: { solution: Song }) => {
//       return x.solution;
//     });
//     const inSecond = inSecondOnly(solu, songs);

//     console.log(inSecond.length);

//     if (inSecond.length > 0) {
//       const randomIndex = Math.floor(Math.random() * inSecond.length);
//       tempTodaysSolution = inSecond[randomIndex];
//     } else {
//       const randomIndex = Math.floor(Math.random() * songs.length);
//       tempTodaysSolution = songs[randomIndex];
//     }
//   } else {
//     //console.log("none");
//     const randomIndex = Math.floor(Math.random() * songs.length);
//     tempTodaysSolution = songs[randomIndex];
//   }
// };

const noRandomElement = async () => {
  if (getItemS) {
    const stats = JSON.parse(getItemS);
    tempTodaysSolution = songs.filter(
      (e) => e.themeNo === stats[stats.length - 1].solution.themeNo
    )[0];
  } else {
    //console.log("none");
    const randomIndex = Math.floor(Math.random() * songs.length);
    tempTodaysSolution = songs[randomIndex];
  }
};

//selectRandomElement();
noRandomElement();

export const todaysSolution = tempTodaysSolution;
// export const todaysSolution = songs[index % songs.length];
