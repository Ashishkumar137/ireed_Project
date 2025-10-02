"use client";
import Image from "next/image";
import { useState } from "react";
import Banner from "../components/Banner";
import SectionHeader from "../components/SectionHeader";

const values = [
  {
    icon: "/assets/approc_icon_1.png",
    title: "TRANSPARENCY",
    desc: "Open, honest & straightforward approach to operations",
  },
  {
    icon: "/assets/approc_icon_2.png",
    title: "TECHNOLOGY ENABLED",
    desc: "Cutting-edge technology for every creation",
  },
  {
    icon: "/assets/approc_icon_3.png",
    title: "EXCELLENCE",
    desc: "Setting benchmarks with outstanding products, processes & human capital",
  },
  {
    icon: "/assets/approc_icon_4.png",
    title: "ETHICS",
    desc: "Building trust with customers & stakeholders with fair practices",
  },
  {
    icon: "/assets/approc_icon_5.png",
    title: "COMMITMENT",
    desc: "Building the nation with focus on customer's interest & sustainability",
  },
];

export default function careerPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Banner
        imageSrc="/assets/who_we_are.webp"
        alt="Who We Are"
        heading="Who we are"
        paragraph="Creating exceptional living spaces for the new India with innovation, robust engineering, and an unparalleled scale of delivery."
      />

      <div className="my-10 mx-auto w-full ">
        <SectionHeader title="Life at Trident Realty" />
        <div className="mx-auto w-full px-6 my-10 max-w-7xl flex flex-col md:flex-row gap-10">
          <div className="flex flex-col flex-1">
            <p>
              Established in 2008, Trident Realty is an innovation-led,
              future-focused real estate developer. The company has been a
              pioneering force behind the rapidly changing skylines of NCR, MMR
              & Tri-City (Chandigarh), with its footprints across residential,
              retail, commercial and hospitality sectors. With the spirit of
              innovation and modern technology at its core, Trident Realty
              within a decade, has carved a niche for itself by setting industry
              benchmarks for quality, robust engineering, and in-house research.
              Transparency, uncompromising business ethics and unswerving
              commitment to organisational values in every aspect of its
              business, are the exceptional attributes that have made Trident
              Realty one of the most preferred real estate brands.
            </p>
            <p>
              As part of its diversified portfolio, Trident Realty has delivered
              over 1.89 million sq. m. of residential & commercial space in the
              high-growth centers, and 1.20 million sq. m. is under various
              stages of construction in residential, retail, hospitality, and
              commercial segment. The group endeavours to create ecosystems that
              are brimming with life through consistent and modern designs,
              catering to all genres, from affordable to lifestyle-based
              products. Trident Realty’s vision is not just about building the
              nation by affecting change through products but creating
              ecosystems for young India to grow. The group is setting
              benchmarks for the real estate industry in India.
            </p>
            <p>
              Through adaptation of technology, Trident Realty is shaping better
              projects without compromising on their ethos of
              Customer-centricity, Sustainability, and Well-being.
            </p>
          </div>
          <div className="flex-1 ">
            <Image
              src="/assets/philosphy_right.webp"
              alt="philosphy_right"
              width={600}
              height={100}
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
        <section className="w-full my-10">
          <SectionHeader title="THE LOGO STORY" />

          <div className="mx-auto w-full px-6 my-10 max-w-7xl flex flex-col md:flex-row gap-8">
            <div className="flex-1 h-[350px]">
              <Image
                src="/assets/philosphy_right22.webp"
                alt="philosphy_right22"
                width={800}
                height={100}
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex flex-col flex-1">
              <p>
                Treading on the road where we continuously exceed our
                expectations, we, at Trident, go beyond the norms to make dreams
                a reality.
              </p>
              <p>
                Our logo is a testament to our unwavering ethos of customer
                centricity, sustainability and well-being .
              </p>
              <p>
                The Trident, encompassing the prongs in the hues of blue and
                green at the core, upholds our vision upon its prongs,
                symbolizing our passion and commitment to building the nation
              </p>
            </div>
          </div>

          <div className="mx-auto w-full px-6 my-10 max-w-7xl flex flex-col md:flex-row gap-8">
            <div className="flex flex-col flex-1">
              <p>
                The <strong className="text-blue-900">colour blue</strong> at
                the left prong of our logo reverberates our passionate approach
                to elevating the customer experience. We uphold our belief in
                Customer Centricity as we strive to deliver excellence with
                utmost transparency, on-time delivery and commitment to ethical
                practices.
              </p>
              <p>
                The <strong className="text-green-600">colour green</strong> ,
                reflecting health, prosperity, and environmental care, stands at
                the core of our logo to represent our organisation's belief in
                Sustainability, aligning with our dedicated efforts to creating
                world-class habitats that reduce carbon footprints.
              </p>
              <p>
                The <strong className="text-blue-900">colour blue</strong> at
                the right prong of our logo embodies Well-being, inspiring us to
                provide quality of life & satisfaction to our employees and
                customers through our products.
              </p>
            </div>
            <div className="flex-1 h-[350px]">
              <Image
                src="/assets/philosphy_right23.jpg"
                alt="philosphy_right23"
                width={800}
                height={100}
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6">
            <div className="flex contain">
              <div className="flex-1"></div>
              <div className="flex-1">
                <p>
                  Treading on the road where we continuously exceed our
                  expectations, we, at Trident, go beyond the norms to make
                  dreams a reality. Our logo is a testament to our unwavering
                  ethos of customer centricity, sustainability and well-being.
                  The Trident, encompassing the prongs in the hues of blue and
                  green at the core, upholds our vision upon its prongs,
                  symbolizing our passion and commitment to
                  <strong> Building the nation.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-10 mt-10 bg-repeat w-full"
          style={{
            backgroundImage:
              "url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')",
          }}
        >
          <SectionHeader title="THE IREED APPROACH" />
          <div className="text-center max-w-7xl mx-auto ">
            <p>
              All Trident Realty projects bear the hallmark of architectural and
              technological innovation, what sets them apart is the strong
              vision of the company, based on enduring values such as
              Transparancy, Ethics, Excellence and Commitment, and adapting to
              the latest technology.
            </p>
            <p>
              This framework add a lot of value as it places the stakeholder at
              the heart of every project and every activity.
            </p>
          </div>
          <div className="w-full pt-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {values.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center w-full md:w-auto gap-3 p-10"
                >
                  <div
                    className="w-full flex items-center justify-center bg-white rounded-md shadow 
                border border-transparent hover:border-green-700 
                hover:scale-105 cursor-pointer transition duration-500"
                  >
                    <div className=" border-gray-300 h-[100px] flex justify-center items-center w-full m-6 border-1 rounded">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={64}
                      height={64}
                    />
                    </div>

                  </div>
                  <h3 className="text-lg text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full">
          <SectionHeader title="Vision & Mission" />

          <div
            className="w-full mx-auto"
            style={{
              backgroundImage: "url('/assets/mission_bg.webp')",
            }}
          >
            <div className=" max-w-7xl justify-center align-center mx-auto w-full px-4 flex flex-col md:flex-row gap-6">
              <div className="relative flex flex-col justify-center text-white p-8 md:p-12">
                <h3 className="text-xl md:text-2xl font-bold mb-4">VISION</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Our vision is to be a leading technology driven real estate
                  organisation in the region while adding value to the lives of
                  customers, business associates & stakeholders. We consistently
                  strive to build a better future with sustainable
                  infrastructure & state-of-the-art projects that symbolises
                  highest standard of quality & contribute towards building the
                  nation.
                </p>
              </div>
              <div className="flex justify-center items-center ">
                <div className="w-2 h-[80%] border-r-2 border-amber-50 hidden md:block "></div>
              </div>
              <div className="relative flex flex-col justify-center text-white p-8 md:p-12">
                <h3 className="text-xl md:text-2xl font-bold mb-4">MISSION</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Our mission is to build sustainable real estate projects
                  within defined timeframe, thereby helping customers to create
                  a meaningful legacy for their future generations. Our passion
                  at work, mingled with process driven approach drive us to set
                  new benchmarks in customer service, or products that we make.
                  Through continuous research and adoption of technology enabled
                  services, we remain committed to meet the ever-evolving needs
                  of real estate industry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
