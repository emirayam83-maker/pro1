const Header = () => {
  return (
    <>
      {/* کلاس lg:mb-48 حذف و به mb-6 تبدیل شد تا فاصله استاندارد شود */}
      <div dir="rtl" className="max-lg:collapse bg-base-200 mb-6 shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>

        {/* کانتینر اصلی نوبار */}
        <div className="collapse-title navbar flex items-center justify-between px-4 py-2">
          
          {/* ==================== ۱. سمت راست: پروفایل + سرچ + کامپوننت تم ==================== */}
          <div className="flex items-center gap-3">
            
            {/* پروفایل / آواتار */}
            <div className="avatar">
              <div className="ring-primary ring-offset-base-300 w-9 rounded-full ring-2 ring-offset-2 overflow-hidden">
                <img
                  alt="User Avatar"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkR769jBPdNeCEpm1c04c8ACHWi4O0w0oyqi82Hp_S9WDecT-a_WPXMEQ&s=10"
                />
              </div>
            </div>

            {/* فیلد جستجو */}
            <div className="flex items-center">
              <input
                type="text"
                placeholder="جستجو..."
                className="input input-bordered input-sm md:input-md w-36 sm:w-56 focus:outline-none"
              />
            </div>

            {/* سوییچ تغییر تم (اندازه آیکون‌ها به h-6 w-6 اصلاح شد تا نوبار را نکشد) */}
            <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm">
              <input type="checkbox" className="theme-controller" value="dark" />

              {/* آیکون خورشید */}
              <svg
                className="swap-off h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* آیکون ماه */}
              <svg
                className="swap-on h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

          </div>

          {/* ==================== ۲. بخش وسط: منوها ==================== */}
          <div className="hidden lg:flex justify-center flex-1">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li><button>صفحه اصلی</button></li>
              <li>
                <details>
                  <summary>دسته‌بندی‌ها</summary>
                  <ul className="p-2 bg-base-100 rounded-box w-40 z-50 shadow">
                    <li><button>فیلم اکشن</button></li>
                    <li><button>سریال</button></li>
                  </ul>
                </details>
              </li>
              <li><button>برترین‌ها</button></li>
            </ul>
          </div>

          {/* ==================== ۳. سمت چپ: نام سایت و دکمه موبایل ==================== */}
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost text-xl font-bold tracking-wide">
              CineStream
            </button>
            <label htmlFor="navbar-1-toggle" className="btn btn-ghost btn-circle lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
          </div>

        </div>

        {/* منوی بازشونده برای موبایل */}
        <div className="collapse-content lg:hidden z-10">
          <ul className="menu p-2">
            <li><button>صفحه اصلی</button></li>
            <li>
              <button>دسته‌بندی‌ها</button>
              <ul className="pr-4">
                <li><button>فیلم اکشن</button></li>
                <li><button>سریال</button></li>
              </ul>
            </li>
            <li><button>برترین‌ها</button></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
