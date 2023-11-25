import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"/>

        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Code With Sunny</div>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        </nav>
        <section className="bg-gray-400 text-white h-screen flex items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Your Website</h1>
            <p className="text-lg">Discover amazing things and more.</p>
            <a href="#" className="mt-4 inline-block bg-white text-blue-500 px-6 py-3 rounded-full">Get Started</a>
          </div>
        </section>
        <footer className="bg-gray-800 text-white p-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
          </div>
        </footer>
    </main>
  )
}
