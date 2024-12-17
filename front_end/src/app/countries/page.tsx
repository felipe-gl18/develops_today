import CountriesList from "@/components/CountriesList";
export default async function Countries({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/availableCountries`
  );
  const data = await res.json();
  const params = await searchParams;
  const search = params.search || "";
  return <CountriesList data={data} search={search} />;
}
