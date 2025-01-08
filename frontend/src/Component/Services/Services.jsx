import React from 'react';
import Img2 from '../../assets/website/coffee2.png';

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Espresso",
        description:
            "A strong concentrated coffee brewed by forcing hot water through finely-ground coffee beans.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Img2,
        name: "Macchiato",
        description:
            "Espresso with a small dollop of milk foam, offering a bold coffee flavor.",
        aosDelay: "100",
    },
    {
        id: 3,
        img: Img2,
        name: "Cappuccino",
        description:
            "Equal parts espresso, steamed milk, and milk foam, often topped with cocoa or cinnamon.",
        aosDelay: "100",
    },
];

const Services = () => {
    return (
        <>
            <span id="services"></span>
            <div className="py-10">
                <div className="container">
                    {/* Header Title */}
                    <div data-aos="fade-up" className='text-center mb-20'>
                        <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                            Best Coffee For You
                        </h1>
                    </div>

                    {/* Servives Card Section */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 
                md:grid-cols-3 gap-14 md:gap-5 place-item-center'>
                        {ServicesData.map((data, index) => {
                            return (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    key={index}
                                    className='rounded-2xl bg-white hover:bg-primary hover:text-white
                            shadow-xl duration-200 max-w-[300px] group relative'>

                                    {/* img section */}
                                    <div className='h-[122px]'>
                                        <img src={data.img} alt=""
                                            className='max-w-[200px] block mx-auto
                                    transform -translate-y-14
                                    group-hover:scale-110 
                                    group-hover:rotate-6 duration-300'
                                        />
                                    </div>

                                    {/* Text Context */}
                                    <div className='p-4 text-center'>
                                        <h1 className='text-xl font-bold'> {data.name} </h1>
                                        <p className='text-gray-500 group-hover:text-white duration-300
                                    text-sm line-clamp-2'> {data.description} </p>
                                    </div>
                                </div>
                            );
                        })}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services