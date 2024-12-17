import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getAvailableCountries(): Promise<any> {
    const res = await fetch('https://date.nager.at/api/v3/AvailableCountries');
    const data = await res.json();
    return data;
  }

  async getCountryDetails(
    countryCode: string,
    countryName: string,
  ): Promise<any> {
    const borderCountries = await this.getBorderCountries(countryCode);
    const population = await this.getCountryPopulationData(countryName);
    const flag = await this.getCountryFlagImage(countryName);
    return {
      borderCountries,
      population,
      flag,
    };
  }
  async getBorderCountries(countryCode: string): Promise<any> {
    const res = await fetch(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`,
    );
    const { borders } = await res.json();
    return borders;
  }

  async getCountryPopulationData(countryName: string): Promise<any> {
    const res = await fetch(
      `https://countriesnow.space/api/v0.1/countries/population`,
    );
    const { data } = await res.json();
    const selectedCountry = data.filter(
      (item: any) => item.country == countryName,
    );
    const populationCounts = selectedCountry[0].populationCounts;
    return populationCounts;
  }

  async getCountryFlagImage(countryName: string): Promise<any> {
    const res = await fetch(
      `https://countriesnow.space/api/v0.1/countries/flag/images`,
    );
    const { data } = await res.json();
    const selectedCountry = data.filter(
      (item: any) => item.name == countryName,
    );
    console.log(data);

    const flag = selectedCountry[0]?.flag;
    return flag || '';
  }
}
