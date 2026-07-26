import { useState } from "react";
import { FaFire, FaGhost, FaHeart, FaDragon, FaLaugh, FaHatWizard, FaRocket, FaUserSecret, FaTheaterMasks, FaFilm } from "react-icons/fa";

const genreIcons = {
  Action: <FaFire />,
  Adventure: <FaDragon />,
  Comedy: <FaLaugh />,
  Horror: <FaGhost />,
  Romance: <FaHeart />,
  Fantasy: <FaHatWizard />,
  "Science Fiction": <FaRocket />,
  Thriller: <FaUserSecret />,
  Drama: <FaTheaterMasks />,
  Animation: <FaFilm />,
};

const popularGenres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 35, name: "Comedy" },
  { id: 27, name: "Horror" },
  { id: 878, name: "Science Fiction" },
  { id: 10749, name: "Romance" },
  { id: 16, name: "Animation" }
];

function GenreList({ onSelect, selectedGenre }) {
  return (
    <div className="w-full bg-white dark:bg-gray-950">
      <div className="flex items-center justify-start md:justify-center gap-6 overflow-x-auto px-6 py-6 scrollbar-hide snap-x" >
        {popularGenres.map((genre) => (
          <div key={genre.id} className="flex flex-col items-center flex-shrink-0 snap-center pb-2" >
            <button
              onClick={() => onSelect(genre.id)}
              className={`group w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                selectedGenre === genre.id
                  ? "bg-red-600 scale-105 shadow-xl shadow-red-500/50"
                  : "bg-gray-800 hover:bg-red-600 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/50"
              }`}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                {genreIcons[genre.name]}
              </span>
            </button>
            
            <span className={`mt-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-300 ${
              selectedGenre === genre.id ? "text-red-600" : "text-gray-700 dark:text-gray-300"
            }`}>
              {genre.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenreList;
