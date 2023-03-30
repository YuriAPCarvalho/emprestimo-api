import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SetupPunishmentService } from './setup-punishment.service';
import { CreateSetupPunishmentDto } from './dto/create-setup-punishment.dto';
import { UpdateSetupPunishmentDto } from './dto/update-setup-punishment.dto';

@Controller('setup-punishment')
export class SetupPunishmentController {
  constructor(private readonly setupPunishmentService: SetupPunishmentService) {}

  @Post()
  create(@Body() createSetupPunishmentDto: CreateSetupPunishmentDto) {
    return this.setupPunishmentService.create(createSetupPunishmentDto);
  }

  @Get()
  findAll() {
    return this.setupPunishmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setupPunishmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSetupPunishmentDto: UpdateSetupPunishmentDto) {
    return this.setupPunishmentService.update(+id, updateSetupPunishmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setupPunishmentService.remove(+id);
  }
}
