import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('1')
  getOne(
    @Query('q1') q1: string,
    @Query('excitement') excitement: number,
  ): string {
    return this.appService.getHello();
  }

  @Get('2')
  getTwo(
    @Query('q2') q2: string,
    @Query('excitement') excitement: number,
  ): string {
    return this.appService.getHello();
  }

  @Get('3')
  getThree(
    @Query('q3') q3: string,
    @Query('excitement') excitement: number,
  ): string {
    return this.appService.getHello();
  }

  @Get('4')
  getFour(
    @Query('q4') q4: string,
    @Query('excitement') excitement: number,
  ): string {
    return this.appService.getHello();
  }

  @Get('5')
  getFive(
    @Query('q5') q5: string,
    @Query('excitement') excitement: number,
  ): string {
    return this.appService.getHello();
  }

  @Get('6')
  getSix(
    @Query('q6') q6: string,
    @Query('excitement') excitement: number,
  ): string {
    return this.appService.getHello();
  }

  @Get('7')
  getSeven(
    @Query('q7') q7: string,
    @Query('excitement') excitement: number,
  ): string {
    return this.appService.getHello();
  }

  @Get('8')
  getEight(
    @Query('q8') q8: string,
    @Query('excitement') excitement: number,
  ): string {
    return this.appService.getHello();
  }

  @Get('9')
  getNine(
    @Query('q9') q9: string,
    @Query('excitement') excitement: number,
  ): string {
    return this.appService.getHello();
  }

  @Get('10')
  getTen(
    @Query('q10') q10: string,
    @Query('excitement') excitement: number,
  ): string {
    return this.appService.getHello();
  }
}
