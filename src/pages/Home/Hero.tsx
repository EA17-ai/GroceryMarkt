

const Hero = () => {
  return (
    <section className="bg-blue-600 py-20">
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-white font-bold text-5xl leading-tight mb-6">Grocery at your Doorstep</h1>
                <p className="text-white text-xl mb-8">We understand the importance of convenience in your busy life. Experience hassle-free shopping with our user-friendly online platform, and home delivery services. We're here to make your grocery shopping experience as seamless as possible.</p>
                <a href="/products"
                    className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:text-white hover:bg-blue-700 transition duration-200">Shop
                    now</a>
            </div>
            <div className="md:w-1/2">
                <img src="grocery.jpg" alt="Photo By leonie wise  "
                    className="w-full rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Hero
