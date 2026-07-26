function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">

        <div
          className="
            w-16
            h-16
            border-4
            border-red-600
            border-t-transparent
            rounded-full
            animate-spin
          "
        ></div>

        <p className="text-white mt-5 text-lg">
          Loading movie...
        </p>

      </div>
    </div>
  );
}

export default Loading;