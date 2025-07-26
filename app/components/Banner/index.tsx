import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-6xl font-bold text-darkpurple'>
                            Conectamos a quienes necesitan un coche con quienes quieren invertir
                        </h1>
                        <p className="text-gray-600 text-lg mt-4">
            Solicita tu préstamo hasta por <strong>$400,000</strong> o invierte desde <strong>$500</strong>.
          </p>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-customPinkHover'>
                            Simula tu crédito
                        </button>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-customPinkHover'>
                            Invierte desde $500
                        </button>
                        </div>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-8 lg:pt-20 hidden lg:block'>
                    <Image src="/images/banner/banner.png" alt="hero-image" width={700} height={300} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
