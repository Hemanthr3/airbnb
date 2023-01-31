import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import Map from "@/components/Map";
import axios from "axios";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";

const Search = ({searchResult}) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const coordinate = ()=> {
    return(
   searchResult?.data?.Map((result)=>({
    longitude:result.long,
    latitude: result.lat,
  }))
    )
}

console.log("Search location is",coordinate)

  return (
    <div>
      <Header
        placeholder={`${location && location} | ${range && range} | ${numberOfGuests && numberOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range && range} - for {numberOfGuests && numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mb-6">Stays in {location && location}</h1>
          <div className="hidden lg:inline-flex mb-5 gap-3 text-gray-800 whitespace-nowrap">
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
              Cancellation Flexibility
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
              Types of place
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
              Price
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
              Rooms and Beds
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
              More filters
            </p>
          </div>
          <div className="flex flex-col">
            {searchResult?.data?.map((item)=>(
            <InfoCard 
            key={item.img}
            img={item.img}
            location={item.location}
            title={item.title}
            description={item.description}
            star={item.star}
            price={item.price}
            total={item.total}
             />

            
          ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex min-w-[600px]">
            <Map searchResult={searchResult?.data}/>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResult = await axios.get(
    "https://airbnb-a9ok8nspk-hemanthr3.vercel.app/api/SearchResultData"
  );

  return {
    props : {
        searchResult: searchResult.data
    }
  }
}
