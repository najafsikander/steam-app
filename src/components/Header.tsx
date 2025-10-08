import { Link } from '@tanstack/react-router'

export default function Header() {

  return (
    <>
      <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
        <Link to="/">
          <img
            src="/images/svgs/logo_steam.svg"
            alt="Steam Logo"
            className="h-10"
          />
        </Link>
      </header>
    </>
  )
}
