import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from "@nestjs/common";

@Controller("demo")
export class DemoController {
  @Post()
  create(@Body() createDemoDto: any) {
    return "This action adds a new Demo";
  }

  @Get()
  findAll(@Query() query: any) {
    //
    return `This action returns all demo `;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return `This action returns a #${id} Demo`;
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateDemoDto: any) {
    return `This action updates a #${id} Demo`;
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return `This action removes a #${id} Demo`;
  }
}
