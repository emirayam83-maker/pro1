import axios from "axios";
import { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ۱. شماره صفحه اصلاح شد
  const url = "https://moviesapi.ir/api/v1/movies?page=1";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت اطلاعات:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-300px">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ۲. گرید کامپکت و ریسپانسیو */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data?.map((movie) => (
          // ۳. اضافه شدن key به کارت اصلی و اصلاح عرض به w-full
          <div
            key={movie.id}
            className="card bg-base-100 w-full shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
          >
            <figure className="aspect-2/3 w-full bg-base-300">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="card-body p-4 flex flex-col justify-between">
              <div>
                <h2 className="card-title text-base font-bold flex justify-between items-start gap-2 mb-2">
                  <span className="line-clamp-1">{movie.title}</span>
                  <div className="badge badge-warning text-xs font-semibold">
                    ⭐ {movie.imdb_rating}
                  </div>
                </h2>
                <div className="badge badge-soft badge-accent text-xs mb-3">
                  {movie.year}
                </div>
              </div>

              {/* ۴. اضافه شدن key به ژانرها */}
              <div className="card-actions justify-start gap-1 flex-wrap">
                {movie.genres?.map((genre) => (
                  <div
                    key={genre}
                    className="badge badge-outline text-xs px-2 py-1"
                  >
                    {genre}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
