function Overview({ overview }) {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-16">

      <h2 className="text-3xl font-bold mb-4">
        Overview
      </h2>

      <p className="text-gray-700 dark:text-white dark:text-gray-300 leading-8 text-lg">
        {overview}
      </p>

    </div>
  );
}

export default Overview;