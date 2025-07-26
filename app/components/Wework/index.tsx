"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    rate: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: '$640,000 mxn',
        name: 'Camaro 2023',
        rate: 'Rendimiento 12%',
        imgSrc: '/images/wework/camaro.png',
    },
    {
        profession: '$380,000 mxn',
        name: 'Kia 2023',
        rate: 'Rendimiento 18%',
        imgSrc: '/images/wework/kia.jpg',
    },
    {
        profession: '$370,000 mxn',
        name: 'Hyundai 2022',
        rate: 'Rendimiento 15%',
        imgSrc: '/images/wework/hyundai.png',
    },
    {
        profession: '$420,000 mxn',
        name: 'Mercedes 2020',
        rate: 'Rendimiento 10%',
        imgSrc: '/images/wework/mercedez.png',
    },
    {
        profession: '$200,000 mxn',
        name: 'Versa 2021',
        rate: 'Rendimiento 19%',
        imgSrc: '/images/wework/versa.jpg',
    },
    {
        profession: '$800,000 mxn',
        name: 'Tesla 2025',
         rate: 'Rendimiento 10%',
        imgSrc: '/images/wework/Tesla.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
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
            <div className="bg-wework py-32">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2"> Diversifica tu inversión en diferentes perfiles</h3>
                        <h3 className="text-2xl sm:text-6xl font-bold text-black opacity-50 lg:mr-46 my-2">desde seminuevos hasta vehículos nuevos</h3>
                        {/* <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">diferente riesgo y rendimientos</h3> */}
                    </div>

                </div>

                <Slider {...settings}>
  {postData.map((items, i) => (
    <div key={i}>
      <div className="bg-white m-3 py-10 px-5 text-center shadow-xl rounded-3xl flex flex-col items-center h-[400px] justify-between">
        
        {/* Contenedor con alto fijo para estandarizar imágenes */}
        <div className="relative w-full h-40 flex items-center justify-center">
          <Image
            src={items.imgSrc}
            alt={items.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Texto */}
        <div className="pt-6">
          <h4 className="text-2xl font-bold">{items.name}</h4>
          <h3 className="text-xl font-normal pt-2 opacity-50">{items.profession}</h3>
          <h3 className="text-xl font-normal opacity-50">{items.rate}</h3>
        </div>

      </div>
    </div>
  ))}
</Slider>

            </div>

        );
    }
}
