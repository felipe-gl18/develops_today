import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('availableCountries')
  async getAvailableCountries(): Promise<any> {
    return this.appService.getAvailableCountries();
  }

  @Get('countryDetails/:countryCode/:countryName')
  async getCountryDetails(
    @Param('countryCode') countryCode: string,
    @Param('countryName') countryName: string,
  ): Promise<void> {
    return this.appService.getCountryDetails(countryCode, countryName);
  }
}
