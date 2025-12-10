import { songs } from "../constants";
import { Song } from "../types/song";

export function searchSong(searchTerm: string): Song[] {
  searchTerm = searchTerm.toLowerCase();

  return songs
    .filter((song: Song) => {
      const songName = song.name.toLowerCase();
      const songArtist = song.artist.toLowerCase();
      const fullName = songArtist + " - " + songName;
      const themeNo = song.themeNo;

      if (fullName.includes(searchTerm) || themeNo.includes(searchTerm)) {
        return song;
      }
    })
    .sort((a, b) => a.themeNo.localeCompare(b.themeNo, "en", { numeric: true }))
    .slice(0, 6);
}
