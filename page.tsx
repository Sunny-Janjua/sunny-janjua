function Contact() {
    return (
        <main>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
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
            <section className="bg-blue-500 text-white h-screen flex items-center">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">About Our Company</h1>
                    <p className="text-lg">Learn more about who we are and what we do.</p>
                </div>
            </section>
            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet risus eget nisl bibendum tristique.
                        Proin vitae libero vel orci ullamcorper tristique. Donec lacinia, mi a scelerisque efficitur, elit ex hendrerit purus,
                        in laoreet tellus nisi id dui.
                    </p>
                    <p className="text-gray-700">
                        Nunc vel massa nec urna tincidunt congue. Sed ac tortor aliquam, facilisis turpis et, laoreet massa. Aenean euismod,
                        purus non tempus tincidunt, nunc sapien convallis quam, a vestibulum nunc justo vel nulla.
                    </p>
                </div>
            </section>
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-bold mb-2">John Doe</h3>
                            <p className="text-gray-700">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                            <p className="text-gray-700">COO</p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-bold mb-2">Bob Johnson</h3>
                            <p className="text-gray-700">CTO</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </main>
    )
}
export default Contact