import Link from "next/link";
import SearchCountry from "./SearchCountry";

interface Country {
  countryCode: string;
  name: string;
}

export default async function CountriesList({
  data,
  search,
}: {
  data: Country[];
  search: string;
}) {
  const filteredCountries = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.countryCode.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="space-y-8">
      <SearchCountry />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredCountries.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-4">
              <Link
                href={`/countries/info/${item.countryCode}/${item.name}`}
                className="text-xl font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                {item.name}
              </Link>
              <p className="text-gray-600 text-sm">{item.countryCode}</p>
            </div>
            <div className="text-right mt-2">
              <Link
                href={`/countries/info/${item.countryCode}/${item.name}`}
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                View Info
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
