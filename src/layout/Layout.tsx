import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="bg-cello-700 py-10">
        <div className="max-w-sm md:max-w-lg lg:max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between text-white">
          <Link to="/">
            <img src="./public/logo.svg" alt="logotipo" />
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className='bg-cello-700 mt-20 py-10'>
        <div className="max-w-sm md:max-w-lg lg:max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between text-white">
          <p>&copy; Todos los derechos reservados - { year }</p>
        </div>
      </footer>
    </>
  )
}
