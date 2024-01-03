import Image from 'next/image'

export default function  Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
    {/* Header */}
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Auth Tutorial</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    {/* Hero Section */}
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Learn Authentication Easily</h2>
        <p className="text-lg mb-8">Master the art of authentication with our comprehensive tutorial.</p>
        <button className="bg-white text-blue-500 py-2 px-6 rounded-lg shadow-md hover:bg-blue-400 transition duration-300">
          Get Started
        </button>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Easy to Follow</h3>
            <p>Step-by-step instructions for a smooth learning experience.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Security Measures</h3>
            <p>Understand authentication best practices and security measures.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Practical Examples</h3>
            <p>Real-world examples and projects to solidify your knowledge.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Join now and unlock the world of authentication!</p>
        <button className="bg-white text-gray-800 py-3 px-8 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          Sign Up
        </button>
      </div>
    </section>

    {/* Footer - You can add a footer section if needed */}
  </div>
  )
}
