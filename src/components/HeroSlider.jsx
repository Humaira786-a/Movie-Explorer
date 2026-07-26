import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HeroSlider({ movies }) {

    const [current, setCurrent] = useState(0);


    useEffect(() => {

        const timer = setInterval(() => {

            setCurrent((prev) =>
                (prev + 1) % movies.length
            );

        }, 5000);


        return () => clearInterval(timer);

    }, [movies.length]);



    if (!movies.length) return null;


    const movie = movies[current];


    return (

        <section
        className="
        pt-0
        relative
        h-screen
        overflow-hidden
        mt-0
        "
        >

            <img
            src={
            `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            }
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            "
            />


            {/* Dark overlay */}
            <div
            className="
            absolute
            inset-0
            bg-black/0
            "
            ></div>



            <div
            className="
            relative
            z-10
            flex
            flex-col
            justify-center
            h-full
            px-10
            max-w-3xl
            "
            >

                <h1
                className="
                text-white
                text-5xl
                font-bold
                mb-4
                "
                >
                    {movie.title}
                </h1>


                <p
                className="
                text-gray-200
                mb-4
                line-clamp-3
                "
                >
                    {movie.overview}
                </p>


                <p
                className="
                text-yellow-400
                text-xl
                mb-5
                "
                >
                    ⭐ {movie.vote_average}
                </p>



                <Link
                to={`/movie/${movie.id}`}
                className="
                bg-red-600
                text-white
                px-6
                py-3
                rounded-lg
                w-fit
                hover:bg-red-700
                "
                >
                    View Details
                </Link>


            </div>



            {/* Dots */}

            <div
            className="
            absolute
            bottom-5
            left-1/2
            flex
            gap-2
            "
            >

            {
                movies.slice(0,5).map((_,index)=>(

                    <button
                    key={index}
                    onClick={()=>setCurrent(index)}
                    className={`
                    w-3
                    h-3
                    rounded-full
                    ${current===index 
                    ? "bg-red-600"
                    :"bg-white dark:bg-gray-950"}
                    `}
                    >
                    </button>

                ))
            }

            </div>


        </section>

    )

}


export default HeroSlider;
