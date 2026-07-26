import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

function Search() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        if (!query.trim()) {
            setMovies([]);
            return;
        }

        const timeout = setTimeout(async () => {

            const data = await searchMovies(query);

            setMovies(data);

        }, 400);

        return () => clearTimeout(timeout);

    }, [query]);

    return (

        <div
            className="
                min-h-screen
                bg-white dark:bg-gray-950/10
                backdrop-blur-xl
                p-10
            "
        >

            <div className="max-w-3xl mx-auto">

                <div
                    className="
                        flex
                        items-center
                      
                        
bg-white dark:bg-gray-950
dark:bg-gray-950
transition-colors
duration-500

                        rounded-full
                        px-6
                        py-4
                    "
                >

                    <FaSearch className="text-gray-500"/>

                    <input

                        value={query}

                        onChange={(e)=>setQuery(e.target.value)}

                        placeholder="Search movies..."

                        className="
                            flex-1
                            ml-4
                            outline-none
                        "
                    />

                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">

                {

                    movies.map(movie=>(

                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />

                    ))

                }

            </div>

        </div>

    );

}

export default Search;