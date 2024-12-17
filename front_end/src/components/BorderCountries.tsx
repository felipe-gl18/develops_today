import Link from "next/link";

interface BorderCountry {
  commonName: string;
  name: string;
}

export default async function BorderCountries({
  data,
}: {
  data: BorderCountry[];
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Border Countries
      </h3>
      {data.map((item: any, index: number) => (
        <div
          className="flex gap-4 items-center justify-between p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
          key={index}
        >
          <Link
            href={`/info/${item.countryCode}/${item.commonName}`}
            className="text-blue-500 hover:text-blue-700 text-lg font-medium"
          >
            {item.commonName}
          </Link>
          <p className="text-sm text-gray-500">{item.countryCode}</p>
        </div>
      ))}
    </div>
  );
}
