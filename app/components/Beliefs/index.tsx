
const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className=" bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">Inversionistas</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-blue leading-snug mb-5 text-center sm:text-start">Crece <span className="text-offwhite">tu dinero ayudando a otros.</span></h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Invierte desde $500 en solicitudes verificadas y recibe pagos mensuales con tasas atractivas.</h5>
                    <p className="text-offwhite text-lg mb-5 text-center sm:text-start"><br /></p>
                    <p className="text-grey text-lg mb-5 text-center sm:text-start"><br /></p>

                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Empezar a invertir</button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-grey tracking-widest mb-5 text-center sm:text-start">Pide un préstamo</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start"><span className="text-blue">Compra</span> tu coche sin letras pequeñas.</h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start">Solicita hasta $400,000 con tasas justas y sin penalizaciones por pagos anticipados.</h5>
                    <p className="text-grey text-lg mb-5 text-center sm:text-start"><br /></p>
                    <p className="text-grey text-lg mb-5 text-center sm:text-start"><br /></p>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Simular mi crédito.</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
