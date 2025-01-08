import React from 'react'
import BannerImg from '../../assets/website/coffee-white.png'
import BgTexture from '../../assets/website/coffee-texture.jpg'
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const bgImage = {
    backgroundImage: `url(${BgTexture})`,
    backgroundColor: "#270c003",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};
const Banner = () => {
    return (
        <>
            <span id="about"></span>
            <div style={bgImage}>
                <div className="container min-h-[550px] flex
                justify-center item-center py-12 sm:py-0">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        { /* Image Section */}

                        <div data-aos="zoom-in">
                            <img src={BannerImg} alt=""
                                className='max-w-[430px] w-full mx-auto spin
                                drop-shadow-xl '
                            />
                        </div>
                        { /* Text Content Section */}
                        <div className='flex flex-col justify-center
                        gap-6 sm:pt-0'>
                            <h1
                                data-aos="fade-up"
                                className='text-3xl sm:text-4xl font-bold font-cursive'>
                                Premium Blen Coffee
                            </h1>
                            <p
                                data-aos="fade-up"
                                className='text-sm text-gray-500
                            tracking-wide leading-5'>
                                Premium Blend Coffee is a harmonious fusion of carefully selected coffee beans, roasted to perfection to bring out their rich, complex flavors. This blend combines the boldness of dark roast with the smooth undertones of medium roast, creating a cup that is both robust and well-balanced. Its velvety texture and hints of chocolate and caramel make it a luxurious treat for the senses.
                            </p>
                            <div className='grid grid-cols-2 gap-6'>
                                <div className='space-y-5'>
                                    <div data-aos="fade-up" className='flex items-center gap-3'>
                                        <GrSecure
                                            className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'
                                        />
                                        <span> Premium Coffee</span>
                                    </div>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                        className='flex items-center gap-3'>
                                        <IoFastFood
                                            className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100'
                                        />
                                        <span>Hot Coffee</span>
                                    </div>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay="500"
                                        data-aos-offset="0"
                                        className='flex items-center gap-3'>
                                        <GiFoodTruck
                                            className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100'
                                        />
                                        <span>Cold Coffee</span>
                                    </div>
                                </div>
                                <div
                                    data-aos="slide-left"
                                    className='border-l-4 border-primary/55  pl-6 space-y-3'>
                                    <h1 className='text-2xl font-semibold font-cursive'>
                                        Tea Lover
                                    </h1>
                                    <p className='text-gray-500 trext-sm'>
                                        {" "}
                                        A haven for tea enthusiasts, our café offers a curated selection of the finest teas from around the world. From classic black and green teas to exotic herbal blends, every cup is brewed to perfection, ensuring a delightful and refreshing experience.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner