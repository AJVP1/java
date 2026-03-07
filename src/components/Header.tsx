import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f2f2f2] bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-360 items-center px-6 py-4">
        <Link to="/" className="flex w-fit items-center gap-3">
          <div className="size-9 text-[#141414]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_header)">
                <path
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="clip0_header">
                  <rect fill="white" height="48" width="48" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#141414]">
            JavaDocs
          </span>
        </Link>
      </div>
    </header>
  );
};
