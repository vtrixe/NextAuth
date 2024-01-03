import Image from 'next/image'

export default function  Home() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-blue-500 min-h-screen">
      {/* Header */}
      <header className="bg-transparent py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Auth Tutorial</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-blue-200 transition duration-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition duration-300">About</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-4">Learn Authentication Easily</h2>
            <p className="text-xl mb-8">Master the art of authentication with our comprehensive tutorial.</p>
            <button className="bg-white text-blue-500 py-3 px-8 rounded-lg shadow-md hover:bg-blue-400 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="absolute bottom-0 right-0 pointer-events-none animate-bounce">
            <img
              src="https://media.tenor.com/xkpk9MMciHUAAAAj/thisisforkyleonly-doge.gif" // Replace with your image link
              alt="Sticker"
              className="h-40 w-40 transform rotate-45"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Easy to Follow</h3>
              <p>Step-by-step instructions for a smooth learning experience.</p>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Security Measures</h3>
              <p>Understand authentication best practices and security measures.</p>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Practical Examples</h3>
              <p>Real-world examples and projects to solidify your knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join now and unlock the world of authentication!</p>
          <button className="bg-white text-gray-800 py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
            Sign Up
          </button>
        </div>
        <div className="absolute bottom-0 left-0 pointer-events-none animate-float">
          <img
            src="https://media.tenor.com/r3NaODYtY08AAAAM/saplingkit-happy.gif" // Replace with your image link
            alt="Sticker"
            className="h-32 w-32"
          />
        </div>
      </section>

      {/* Footer - You can add a footer section if needed */}
    </div>
  );
  
}
