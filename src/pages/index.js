import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

// <video controls className="w-4/12">
//               <source src="/images/bestplywood.mp4" type="video/mp4" />
//             </video>

// Want to know more about Best Plywood or request a quote?

export default function Home() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>Best Plywood</title>
        <meta
          name="description"
          content="Our Okoume Marine Plywood is made from high-quality Okoume wood, making it perfect for marine applications. Its durability and resistance to water make it an excellent choice for boat-building, outdoor furniture, and other water-related projects."
        />
        <meta
          name="keywords"
          content="Okoume plywood, Marine plywood, Water-resistant plywood, Boat building material, Outdoor furniture, Woodworking, Water-resistant, Durable, Marine applications."
        />
      </Head>

      <main className="flex min-h-screen flex-col items-center md:pt-10">
        <div
          className="w-full max-w-5xl items-center
       justify-between text-base lg:flex font-semibold p-5
        rounded-xl	 bg-gray-300"
        >
          <h1 id="Home" className="text-3xl font-semibold">
            <span className="text-[#4cca75]">Best</span> Plywood
          </h1>

          <div className="mt-5 md:mt-0 flex gap-10 justify-center">
            <Link href="#home" className="hover:bg-[#4cca75] text-xl">
              Home
            </Link>
            <Link href="#Certifications" className="hover:bg-[#4cca75] text-xl">
              Certifications
            </Link>
            <Link href="#Contact" className="hover:bg-[#4cca75] text-xl">
              Contact
            </Link>
          </div>
        </div>
        <div className="pt-20  w-full max-w-5xl items-center justify-between p-5">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <h1 className="text-5xl font-semibold ">Best Okume</h1>
              <h1 className="text-6xl font-semibold pt-5 pb-5">Plywood</h1>
            </div>
            <Image
              src="/images/marine1.png"
              alt="bestplywood"
              width="500"
              height="200"
            />
          </div>
          <hr
            className="border-solid border-2 mt-5 "
            style={{ borderColor: "#4cca75" }}
          />
          <div className="flex flex-col md:flex-row">
            <div>
              <h3 className="text-2xl pt-10 italic text-[#4cca75] ">
                Plywood Manufacturing Company
              </h3>
              <h2 className="text-lg pt-5 md:w-6/12	">
                High quality plywood produced with 100% veneers of the tropical
                hardwood Okoume, specially manufactured to provide durability
                and longevity. Its physical characteristics are very stable and
                can withstand exposure to severe weather conditions for
                prolonged periods of time.
              </h2>
              <div className="w-44 mt-6 md:pt-0 text-white font-bold">
                <a
                  href="mailto:info@bestplywood.net?subject=Marine plywood"
                  className="bg-[#4cca75] justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
                >
                  Contact US
                </a>
              </div>
            </div>
            <div className="w-full pt-5">
              <video controls poster="/images/videointro.jpg">
                <source src="/images/bestplywood.mp4" type="video/mp4" />
                {/* <source src="/path/to/video.webm" type="video/webm" /> */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="pt-20 md:p-5  w-full max-w-5xl flex items-center flex-col md:flex-row justify-between ">
          <div
            className="min-w-[100%] md:min-w-[50%] bg-[#4cca75] mt-5"
            style={{ minHeight: "350px", position: "relative" }}
          >
            <Image src="/images/okume.gif" alt="bestplywood" layout="fill" />
          </div>
          <div className="min-w-[50%] md:pl-5 pt-10 md:text-right	flex flex-col	md:items-end md:flex-end p-5">
            <h1 className="text-3xl   text-[#4cca75] font-bold">
              Performances and applications
            </h1>
            <h2 className="text-lg pt-5 pb-5">
              The physical properties of selected Okoume veneers, combined with
              waterproof gluing and high standards manufacturing, result in
              extra durability, suitable for marine and exterior uses in
              industrial (shipbuilding, road and rail vehicles manufacture) and
              building (exterior joinery, carpentry, shutter boards, exterior
              basements, balustrades, riverside panelling) applications
            </h2>
          </div>
        </div>
        <div className="w-full bg-[#4cca75] flex justify-center ">
          <div className="pt-20  max-w-5xl items-center justify-between  p-5">
            <h1 id="Certifications" className="text-4xl font-semibold">
              Certifications
            </h1>
            <h1 className="text-xl font-normal w-full md:w-7/12 pt-5">
              As a responsible plywood supplier, we take our commitment to
              quality and sustainability seriously. That&apos;s why we have obtained
              several certifications that demonstrate our dedication to
              providing our customers with top-quality and environmentally
              friendly products.
            </h1>
            <div className="max-w-5xl flex gap-5 md:gap-20 pt-20 items-center ">
              <div>
                <Image
                  src={"/images/ce.png"}
                  alt="ce"
                  width={150}
                  height={20}
                />
              </div>
              <div>
                <Image
                  src={"/images/carb-phase-2-plywood.webp"}
                  alt="ce"
                  width={200}
                  height={40}
                />
              </div>
              <div>
                <Image
                  src={"/images/china-fsc-plywood-1.webp"}
                  alt="ce"
                  width={200}
                  height={40}
                />
              </div>
              <div>
                <Image
                  src={"/images/iso-logo.gif"}
                  alt="ce"
                  width={120}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-20 pb-20  w-full max-w-5xl flex  justify-between p-5 ">
            <div>
              <h1 className="text-4xl font-semibold mb-8">
                Technical Specifications
              </h1>
              <div className="flex flex-col md:flex-row ">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    General properties and tolerances (ex factory)
                  </h2>
                  <ul className="list-disc pl-6">
                    <li>
                      <span className="font-bold">Thickness:</span> 4 mm, 6mm, 8
                      mm, 9 mm,10 mm,12 mm,15 mm,18 mm,20 mm,25 mm,30 mm.
                    </li>
                    <li>
                      <span className="font-bold">Standard sizes:</span> 2440 X
                      1220,2500 X 1220/1250 mm
                    </li>
                    <li>
                      {" "}
                      <span className="font-bold">Squareness:</span> ±0.25% of
                      the length of the diagonal
                    </li>
                    <li>
                      <span className="font-bold">Moisture content:</span>{" "}
                      between 8% and 12%
                    </li>
                    <li>
                      {" "}
                      <span className="font-bold">Density:</span> 550 kg/cbm
                      ±10%
                    </li>
                  </ul>
                  <button
                    onClick={() => setShowText(!showText)}
                    className={`mt-2 ${
                      showText ? "opacity-0" : "opacity-100"
                    } bg-[#4cca75] mt-5 hover:bg-[#4cba85] text-white font-bold py-2 px-4 rounded  `}
                  >
                    Read {showText ? "less" : "more"}
                  </button>{" "}
                </div>
                <div className="pt-5 flex justify-center">
                  <Image
                    src="/images/okume-pal.jpg"
                    alt="Plywood"
                    width={400}
                    height={200}
                  />
                </div>
              </div>
              {showText && (
                <div>
                  <h2 className="text-xl font-bold mb-2">Other Properties:</h2>
                  <ul className="list-disc pl-6">
                    <li>
                      <span className="font-bold">Glue Line:</span> Water and
                      waterproof gluing using either Melamine Urea Formaldehyde
                      (MUF) or Phenol Formaldehyde (PF) resins.
                    </li>
                    <li>
                      <span className="font-bold">Face:</span> They present a
                      solid surface that is free from open defects. Face veneers
                      are free of knots other than occasional sparse &quot;sound
                      pin&quot; knots. The veneers are reasonably free from
                      irregular grain. Face veneers are B/BB and their thickness
                      is between 1.0 mm and 1.5 mm.
                    </li>
                    <li>
                      <span className="font-bold">Core Veneers:</span> They have
                      the same basic requirements as face veneers, except that
                      small splits may occur, and there is no limit on the
                      number of pin knots or edge joints. Core veneer thickness
                      is between 1.5 mm and 3.0 mm.
                    </li>
                    <li>
                      <span className="font-bold">Finishing:</span> All boards
                      are sanded on both sides equally.
                    </li>
                  </ul>
                  <h2 className="text-lg font-bold mb-2 mt-4">
                    Performance characteristics and standards compliance
                  </h2>
                  <ul className="list-disc pl-6">
                    <li>
                      <span className="font-bold">Standards:</span> Meets the
                      requirements of EN 13986:2004+A1.
                    </li>
                    <li>
                      <span className="font-bold">Bonding quality:</span> Class
                      2 (EN 314-2)
                    </li>
                    <li>
                      <span className="font-bold">Durability (humidity):</span>{" "}
                      Class 2 - Use in humid conditions as non-structural
                      components (EN 636)
                    </li>
                    <li>
                      <span className="font-bold">Formaldehyde class:</span> E1
                    </li>
                    <li>
                      <span className="font-bold">Reaction to fire:</span> class
                      D-s2, d0
                    </li>
                  </ul>
                  <button
                    onClick={() => setShowText(!showText)}
                    className="bg-[#4cca75] mt-5 hover:bg-[#4cba85] text-white font-bold py-2 px-4 rounded"
                  >
                    Read {showText ? "less" : "more"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          id="Contact"
          className="w-full min-h-screen flex items-center justify-center bg-black"
        >
          <div className=" w-full max-w-5xl md:w-2/3 px-4 text-white flex flex-col">
            <div className="w-full text-7xl font-bold">
              <h1 className="w-full md:w-2/3">
                How can we help <span className="text-[#4cca75]"> you</span>.
                get in touch
              </h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
              <p className="w-full md:w-2/3 text-gray-400">
                So why wait? Browse our selection of marine plywood today and
                experience the ultimate in strength, durability, and
                performance. We guarantee you won&apos;t be disappointed!
              </p>

              <div className="w-44 pt-6 md:pt-0">
                <a
                  href="mailto:info@bestplywood.net?subject=Marine plywood"
                  className="bg-[#4cca75] justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
                >
                  Contact US
                </a>
              </div>
            </div>
            <div className="pt-10 mb-5 flex gap-5">
              <Image
                src="/images/mail.png"
                alt="Plywood"
                width={30}
                height={30}
              />
              <p className="text-xl">info@bestplywood.net</p>
            </div>
            <div className="flex gap-5">
              <Image
                src="/images/phone.png"
                alt="Plywood"
                width={30}
                height={30}
              />
              <p className="text-xl">+1 404 553 5917</p>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-24 mb-12 flex-row justify-between">
                <div className="">
                  <h1 className="text-3xl font-semibold">
                    <span className="text-[#4cca75]">Best</span> Plywood
                  </h1>
                </div>
                <a
                  href="#Home"
                  className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
                >
                  Home
                </a>
                <a
                  href="#Certifications"
                  className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
                >
                  Certifications
                </a>

                <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                  Contact
                </a>
              </div>
              <hr className="border-gray-600" />
              <p className="w-full text-center my-12 text-gray-600">
                Copyright © Best Plywood
              </p>
              <p className="w-full text-right my-12 text-gray-600">
                Site made by{" "}
                <a className="font-bold" href="https://www.it-wellen.de">
                  IT-Wellen.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
