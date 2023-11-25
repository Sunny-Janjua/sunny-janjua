function Contact(){
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
    <div className="container mx-auto mt-8">
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
            <form action="#" method="post" className="max-w-lg">
                <div className="mb-4">
                    <label className="block text-gray-700"/>Name:
                    <input type="text" id="name" name="name" className="w-full border p-2"/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700"/>Email:
                    <input type="email" id="email" name="email" className="w-full border p-2"/>
                </div>

                <div className="mb-4">
                    <label  className="block text-gray-700"/>Message:
                    <textarea id="message" name="message" className="w-full border p-2"/>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send Message</button>
            </form>
        </section>
        <section>
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="mb-4 md:mb-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.79472579783!2d-122.41941596475424!3d37.77492948933341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e16ddd61833%3A0x76b792801138a8b8!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1631397226121!5m2!1sen!2sus" width="100%" height="300"/>
                </div>
                <div>
                    <p className="text-gray-700"><strong>Address:</strong> 123 Main Street, Cityville, State, Country</p>
                    <p className="text-gray-700"><strong>Email:</strong> info@example.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +1 (123) 456-7890</p>
                </div>
            </div>
        </section>

    </div>
    <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </main>
        )
}
export default Contact