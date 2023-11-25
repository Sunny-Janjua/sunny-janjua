function Services() {
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
            <section className="py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-8">Our Services</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-bold mb-2">Web Development</h2>
                            <p className="text-gray-700">
                                We create responsive and user-friendly websites tailored to your needs.
                            </p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">Add to Cart</button>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-bold mb-2">Graphic Design</h2>
                            <p className="text-gray-700">
                                Our creative team delivers stunning visuals for your brand and projects.
                            </p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">Add to Cart</button>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-bold mb-2">Digital Marketing</h2>
                            <p className="text-gray-700">
                                Boost your online presence with our effective digital marketing strategies.
                            </p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-8">Shopping Cart</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-bold mb-2">Web Development</h2>
                            <p className="text-gray-700">
                                Price: $500
                            </p>
                            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full">Remove</button>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-bold mb-2">Graphic Design</h2>
                            <p className="text-gray-700">
                                Price: $300
                            </p>
                            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full">Remove</button>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-bold mb-2">Digital Marketing</h2>
                            <p className="text-gray-700">
                                Price: $700
                            </p>
                            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full">Remove</button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Total: $1,500</h2>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-full">Checkout</button>
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
export default Services