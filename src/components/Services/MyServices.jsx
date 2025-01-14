import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

import { industry } from "../../utils/industries";
import arrowleft from "../../assets/back.png";
import arrowright from "../../assets/next.png";
import ServicesCard from "./ServicesCard";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Virtual, Navigation, Pagination]);

const MyServices = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div className=' my-12'>
			<h3
				data-aos='fade-down'
				className='sm:w-[300px] w-full text-[2rem] md:text-[2.3rem] text-yellow-600 font-bold sm:border-b-4 border-b-0  border-blue-900 pb-[0.5rem] sm:ml-[4rem] ml-1 mt-2 sm:text-left text-center m-auto'>
				Our Services
			</h3>
			<ServiceCardContainer />
		</div>
	);
};

export default MyServices;

const ServiceCardContainer = () => {
	const [swiperRef, setSwiperRef] = useState(null);

	// sliderfront button function
	const slideFront = (index) => {
		swiperRef.slideTo(index + 1, 0);
		console.log(swiperRef.isEnd);
		console.log("go front");
	};
	// sliderback button function
	const slideBack = (index) => {
		swiperRef.slideTo(index - 1, 0);
		console.log("go back");
	};
	return (
		<div className='relative'>
			<Swiper
				slidesPerView={"1"}
				onSwiper={setSwiperRef}
				spaceBetween={20}
				loop={true}
				modules={[Navigation, Pagination]}>
				{industry.map((card, idx) => {
					return (
						<SwiperSlide>
							<ServicesCard card={card} />
						</SwiperSlide>
					);
				})}

				<div className='flex gap-x-10 ml-[5rem] items-center hidden sm:flex'>
					<img
						src={arrowleft}
						onClick={() => slideBack(swiperRef.activeIndex)}
						className=' z-40'
						width={60}
						height={60}
						alt='arrowright'
					/>

					<img
						src={arrowright}
						onClick={() => slideFront(swiperRef.activeIndex)}
						className=' z-40'
						width={55}
						height={55}
						alt='arrowright'
					/>
				</div>
			</Swiper>
		</div>
	);
};
