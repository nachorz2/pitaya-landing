"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
    ref: string; // Optional for articles with a link
}

const postData: DataType[] = [
    {
        time: "15 min",
        heading: 'Crowdlending: Una forma innovadora de invertir y generar ingresos prestando dinero',
        heading2: '',
        name: "Publicado en on El Imparcial",
        date: 'Abril 6, 2025',
        imgSrc: '/images/articles/article.png',
        ref:'https://www.elimparcial.com/dinero/2025/04/06/crowdlending-una-forma-innovadora-de-invertir-y-generar-ingresos-prestando-dinero/?utm_source=chatgpt.com',
    },
    {
        time: "5 min",
        heading: 'Crédito automotriz cerró el 2024 con crecimiento cercano a 50%',
        heading2: 'Y seguirá creciendo',
        name: "Publicado en El Economista",
        date: 'Febrero 02, 2025',
        imgSrc: '/images/articles/article2.png',
        ref:'https://www.eleconomista.com.mx/sectorfinanciero/credito-automotriz-cerro-2024-crecimiento-cercano-20250211-745959.html?utm_source=chatgpt.com',
    },
    {
        time: "5 min",
        heading: 'Crowlending, una alternativa',
        heading2: 'para diversificar la cartera de inversión',
        name: "Publicado en Expansión",
        date: 'Enero 27, 2024',
        imgSrc: '/images/articles/article3.png',
        ref:'https://www.expansion.com/ahorro/2024/01/27/65b416eae5fdea8f578b460a.html',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Published on Startupon",
        date: 'August 19, 2021',
        imgSrc: '/images/articles/article.png',
        ref:'https://www.elimparcial.com/dinero/2025/04/06/crowdlending-una-forma-innovadora-de-invertir-y-generar-ingresos-prestando-dinero/?utm_source=chatgpt.com',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Published on Startupon",
        date: 'August 19, 2021',
        imgSrc: '/images/articles/article2.png',
        ref:'https://www.elimparcial.com/dinero/2025/04/06/crowdlending-una-forma-innovadora-de-invertir-y-generar-ingresos-prestando-dinero/?utm_source=chatgpt.com',
    },
    {
        time: "5 min",
        heading: 'Crowlending, una alternativa en auge',
        heading2: 'para diversificar la cartera de inversión',
        name: "Published on Startupon",
        date: 'August 19, 2021',
        imgSrc: '/images/articles/article3.png',
        ref:'https://www.elimparcial.com/dinero/2025/04/06/crowdlending-una-forma-innovadora-de-invertir-y-generar-ingresos-prestando-dinero/?utm_source=chatgpt.com',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">ARTÍCULOS</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Noticias relevantes.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" />

                                    <Link href={items.ref}>
                                        <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">{items.time}</h3>
                                    </Link>
                                    <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                    <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                    <div>
                                        <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{items.name}</h3>
                                        <h3 className='text-base font-normal pb-1 opacity-75'>{items.date}</h3>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
