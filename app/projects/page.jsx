"use client";
import { useState,useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { TbArrowNarrowRightDashed } from "react-icons/tb";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const projectsData = [
  {
    id: 1,
    name: "TRIDENT EMBASSY",
    location: "Greater Noida (West)",
    type: "Residential",
    status: "under-construction",
    image: "/assets/villa1.webp",
  },
  {
    id: 2,
    name: "VERONA",
    location: "Mumbai",
    type: "Residential",
    status: "under-construction",
    image: "/assets/villa2.webp",
  },
  {
    id: 3,
    name: "OSHI",
    location: "Mumbai",
    type: "Residential",
    status: "under-construction",
    image: "/assets/villa3.webp",
  },
  {
    id: 4,
    name: "OSHI",
    location: "Mumbai",
    type: "Residential",
    status: "delivered",
    image: "/assets/villa1.webp",
  },
];

export default function Projects() {
  const [filters, setFilters] = useState({
    type: "Any",
    location: "Any",
    status: "Any",
  });
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    let results = projectsData.filter((proj) => {
      return (
        (filters.type === "Any" || proj.type === filters.type) &&
        (filters.location === "Any" ||
          proj.location.includes(filters.location)) &&
        (filters.status === "Any" || proj.status === filters.status)
      );
    });
    setFilteredProjects(results);
    setFilters({
    type: "Any",
    location: "Any",
    status: "Any",
  });
  };
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div>
      <section className="w-full flex flex-col items-center py-6">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-full px-6">
            <div className="flex sm:flex-col md:flex-row border border-gray-300 overflow-hidden w-full max-w-7xl mx-auto">
              <div className="flex-1 border-r border-gray-300 px-3 py-2">
                <label className="text-gray-500">PROPERTY TYPE</label>
                <select
                  name="type"
                  value={filters.type}
                  onChange={handleChange}
                  className="w-full outline-none"
                >
                  <option value="Any" hidden>
                    Any
                  </option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div className="flex-1 border-r border-gray-300 px-3 py-2">
                <label className="text-gray-500">LOCATIONS</label>
                <select
                  name="location"
                  value={filters.location}
                  onChange={handleChange}
                  className="w-full outline-none"
                >
                  <option value="Any" hidden>
                    Any
                  </option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Greater Noida (West)">Greater Noida</option>
                </select>
              </div>

              <div className="flex-1 border-r border-gray-300 px-3 py-2">
                <label className="text-gray-500">STATUS</label>
                <select
                  name="status"
                  value={filters.status}
                  onChange={handleChange}
                  className="w-full outline-none"
                >
                  <option value="Any" hidden>
                    Any
                  </option>
                  <option value="under-construction">Under Construction</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>

              <div className="px-3 py-2">
                <button
                  onClick={handleSearch}
                  className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-green-700 hover:cursor-pointer"
                >
                  Search Properties
                </button>
              </div>
            </div>
          </div>
          <div className="w-full py-6">
            <div className="w-full max-w-7xl mx-auto relative px-6">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                modules={[Navigation,Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                autoplay
              >
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((proj) => (
                    <SwiperSlide key={proj.id}>
                      <div className="border-b  border-green-600 hover:border-gray-400 transition duration-500 cursor-pointer">
                        <div className="w-full overflow-hidden aspect-[1] relative max-w-[400px] mx-auto">
                          <Image
                            src={proj.image}
                            alt={proj.name}
                            width={400}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="py-3">
                          <div className="w-full flex justify-between">
                            <h3 className="text-xl mb-3 uppercase">
                              {proj.name}
                            </h3>
                            <TbArrowNarrowRightDashed className="text-3xl hover:text-green-700" />
                          </div>
                          <p className="text-gray-500 text-sm uppercase">
                            {proj.type} - {proj.location}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <p className="text-center text-gray-500 w-full py-6">
                    No projects found.
                  </p>
                )}
              </Swiper>
              <button
                ref={prevRef}
                className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-md cursor-pointer hover:bg-green-700"
              >
                <GoArrowLeft />
              </button>
              <button
                ref={nextRef}
                className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-md cursor-pointer hover:bg-green-700"
              >
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
