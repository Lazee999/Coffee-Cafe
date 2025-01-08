import React from 'react'
import Slider from 'react-slick';

const TestimonialData = [
    {
        id: 1,
        name: "Dilshan Jayasinha",
        text: "The aroma of freshly brewed coffee here is heavenly! It's my favorite spot to start my day.",
        img: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        name: "Emily Rodriguez",
        text: "The cappuccino is absolutely divine, and the ambiance makes it perfect for a quick break.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 3,
        name: "John Carter",
        text: "A cozy café with the best pastries and coffee combo. Perfect for a weekend treat!",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 4,
        name: "Sarah Thompson",
        text: "The baristas are friendly, and the coffee is consistently excellent. Highly recommended!",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 5,
        name: "David Lee",
        text: "Great coffee, warm atmosphere, and fantastic service. It’s my go-to spot!",
        img: "https://picsum.photos/101/101",
    }
];

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    sliderToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    sliderToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-10 mb-10'>
            <div className="container">
                {/* header section */}

                <div
                    data-aos="fade-up"
                    className='text-center mb-10'>
                    <h1 className='text-4xl font-bold font-cursive 
                        text-gray-800'>
                        Testimonial
                    </h1>
                </div>
                {/* Testimonials card section  */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div className="my-6">
                                <div
                                    key={data.id}
                                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                                >
                                    <div className="mb-4">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="rounded-full w-20 h-20"
                                        />
                                    </div>
                                    {/* content section */}
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3">
                                            <p className="text-xs text-gray-500">{data.text}</p>
                                            <h1 className="text-xl font-bold text-black/80  font-cursive2">
                                                {data.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                        ,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Testimonial