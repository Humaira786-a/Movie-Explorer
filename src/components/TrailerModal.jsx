function TrailerModal({ trailer, onClose }) {

  if (!trailer) return null;

  return (

    <div
      className="
      fixed
      inset-0
      bg-white dark:bg-gray-950/80
      backdrop-blur-sm
      flex
      justify-center
      items-center
      z-50
      "
    >

      <div
        className="
        relative
        bg-white dark:bg-gray-950
        rounded-2xl
        overflow-hidden
        w-[90%]
        max-w-5xl
        "
      >

        <button
          onClick={onClose}
          className="
          absolute
          top-4
          right-4
          bg-red-600
          text-white
          rounded-full
          w-10
          h-10
          hover:bg-red-700
          z-10
          "
        >
          ✕
        </button>

        <iframe
  className="w-full aspect-video"
  src={`https://www.youtube.com/embed/${trailer.key}`}
  title="Trailer"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

      </div>

    </div>

  );

}

export default TrailerModal;