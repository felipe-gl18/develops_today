import BorderCountries from "@/components/BorderCountries";
import PopulationChart from "@/components/PopulationChart";
import Image from "next/image";

interface Params {
  params: {
    countryCode: string;
    countryName: string;
  };
}

export default async function Info({ params }: Params) {
  const { countryCode, countryName } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/countryDetails/${countryCode}/${countryName}`
  );
  const data = await res.json();
  const { flag, borderCountries, population } = data;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{countryName}</h1>
        <Image
          src={flag}
          height={50}
          width={80}
          alt={`${countryName} flag`}
          className="rounded-md shadow-md"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full bg-white ">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Country Info
            </h2>
            <p className="text-gray-600">Code: {countryCode}</p>
            <p className="text-gray-600">Name: {countryName}</p>
          </div>
          <BorderCountries data={borderCountries} />
          <PopulationChart data={population} />
        </div>
      </div>
    </div>
  );
}
