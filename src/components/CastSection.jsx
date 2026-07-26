import { useState } from "react";

function CastSection({ cast }) {

  const [showAllCast, setShowAllCast] = useState(false);

  return (

    <div className="max-w-7xl mx-auto px-8 mt-20">

      <h2 className="text-4xl font-bold mb-8">
        Main Cast
      </h2>

      {/* Main Cast */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {cast.slice(0,6).map(actor=>(

          <div
            key={actor.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden dark:shadow-black/40 hover:scale-105 transition"
          >

            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                  : "https://via.placeholder.com/300x450?text=No+Photo"
              }
              alt={actor.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-4">

              <h3 className="font-bold dark:text-white">
                {actor.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {actor.character}
              </p>

            </div>

          </div>

        ))}

      </div>

      {cast.length > 6 && (

        <div className="flex justify-center mt-8">

          <button
            onClick={() => setShowAllCast(!showAllCast)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
          >
            {showAllCast ? "Hide Cast ▲" : "See More ▼"}
          </button>

        </div>

      )}

      {showAllCast && (

        <div className="flex gap-6 overflow-x-auto mt-10 pb-4">

          {cast.slice(6).map(actor=>(

            <div
              key={actor.id}
              className="min-w-[180px] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden dark:shadow-black/40 flex-shrink-0"
            >

              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : "https://via.placeholder.com/300x450?text=No+Photo"
                }
                alt={actor.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">

                <h3 className="font-bold dark:text-white">
                  {actor.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {actor.character}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default CastSection;