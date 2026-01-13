import React from "react";

function Home() {
  // console.log(0.1 + 0.2 === 0.3)
  return (
    <div>
      <img
        className="absolute right-0"
        src="/Ellipse 9.png"
        alt=""
        width={250}
      />
      <div className="flex">
        <div className="p-22 pl-48 space-y-2.5">
          <p className="text-gray-500 font-light font-sans uppercase">
            Restaurant
          </p>
          <p className="text-4xl font-bold">
            The <span className="text-orange-600">#One</span>
          </p>
          <p className="text-4xl font-bold">
            Momo <span className="text-orange-600">Restaurant</span>
          </p>
          <p>
            More than{" "}
            <span className="text-orange-600 font-bold">20+ Varieties</span> of
            momo available for you
          </p>
          <div className="bg-green-900 w-46 p-3 text-white rounded-3xl text-center mt-8">
            Explore Food Menu{" "}
          </div>
        </div>
        <div className="relative p-8 left-22 right-1">
          <img src="/Frame 16.png" alt="" width={450} />
        </div>
      </div>
      <div className="pl-48 mt-32 flex">
        <div>
          <img src="/Group 3.png" alt="" width={800} />
        </div>
        <div className="p-16">
          <p className="font-bold text-4xl">
            Why customers <span className="text-orange-600">Love Us</span>
          </p>
          <p className="text-gray-500 mt-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam iste
            provident ad commodi, incidunt aspernatur exercitationem. Vero
            inventore explicabo totam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error, dignissimos!
          </p>
          <div className="bg-green-900 w-46 p-3 text-white rounded-3xl text-center mt-8">
            Explore Our Story{" "}
          </div>
        </div>
      </div>
      <div className="pl-48 p-22">
        <div className="text-center space-y-4">
          <p className="text-4xl font-bold">
            Our <span className="text-orange-600">Most Popular </span>Recipes
          </p>
          <p className="text-gray-500">
            Browse through a varieties of fresh ingredients selected only from
            the best places
          </p>
        </div>
        <div className="flex justify-center font-semibold gap-20 mt-10 items-center">
          <p className="border-2 rounded-4xl w-18 p-1 text-center">Buff</p>
          <p>Chicken</p>
          <p>Veg</p>
        </div>
        <div className="mt-10 ">
          <img src="/Frame 24.png" alt=""  />
        </div>
        <div className="flex justify-center">
          <div className="bg-green-900 w-46 p-3 text-white rounded-3xl text-center mt-8 ">
            Explore Our Menu{" "}
          </div>
        </div>
      </div>
      <div className="pl-48 p-22 pt-0">
        <div className="text-center mb-10">
          <p className="text-3xl font-bold"><span className="text-orange-600">We Offer People </span>The Service They Want</p>
        </div>
        <div className="bg-[url('/src/assets/Image.png')] h-[450px] bg-contain bg-no-repeat flex flex-col space-x-3 justify-center items-center">
          {/* <img src="/src/assets/Image.png" alt="" width={1000} className="relative"/> */}
          <p className="text-3xl text-black font-bold">Process Behind the Making</p>
          <p>See how chef cooks only the best momos</p>
          <div className="bg-green-900 w-46 p-3 text-white rounded-3xl text-center mt-8 ">
            Watch The Video{" "}
          </div>
        </div>
      </div>
      <div className="pl-48 p-22 pt-0 flex ">
        <div className="p-12">
          <p className="text-2xl font-bold">
            200+ <span className="text-orange-600">Happy Customers</span>
          </p>
          <p className="text-green-900 font-semibold">
            What our customers say about us
          </p>
          <p className="italic text-gray-500 mt-10 ">
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            molestias sint aperiam cupiditate earum atque iste, dolor
            consequatur beatae tempora. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita, doloremque. "
          </p>
          <p className="text-2xl font-bold mt-5">
           - Livia Dias
          </p>
        </div>
        <div>
          <img src="/Rectangle 8.png" alt="" width={800} />
        </div>
      </div>
    </div>
  );
}

export default Home;
