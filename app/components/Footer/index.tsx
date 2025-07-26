import Image from "next/image";
import Link from "next/link";

const footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">

                {/* LOGO + Misión */}
                <div className="col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <Image src="/logoBlack.png" alt="Pitaya logo" width={160} height={20} />
                        <h4 className="text-xl font-semibold"></h4>
                    </div>
                    <p className="text-sm opacity-70">
                        Plataforma de crowdlending automotriz que conecta a inversionistas con personas que buscan comprar su próximo auto. Inversión justa, digital y transparente.
                    </p>
                    <div className="flex gap-4 mt-4">
                      
                    </div>
                </div>

                {/* Créditos */}
                <div>
                    <h5 className="font-semibold mb-2">Créditos</h5>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li><Link href="#">Simulador</Link></li>
                        <li><Link href="#">Requisitos</Link></li>
                        <li><Link href="#">Cómo funciona</Link></li>
                    </ul>
                </div>

                {/* Inversionistas */}
                <div>
                    <h5 className="font-semibold mb-2">Inversionistas</h5>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li><Link href="#">Comienza a invertir</Link></li>
                        <li><Link href="#">Rendimientos esperados</Link></li>
                        <li><Link href="#">Riesgos y protección</Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h5 className="font-semibold mb-2">Legal</h5>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li><Link href="#">Aviso de privacidad</Link></li>
                        <li><Link href="#">Términos y condiciones</Link></li>
                        <li><Link href="#">Cookies</Link></li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs opacity-60">
                © {new Date().getFullYear()} Pitaya — Todos los derechos reservados
            </div>
        </footer>
    )
}

export default footer;