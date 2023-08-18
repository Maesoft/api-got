import { Controller, Get } from '@nestjs/common';
import { GotService } from './got.service';
import { iCharacter } from './got.interface';

@Controller()
export class GotController {
    constructor(private readonly gotService:GotService){}

    @Get('characters')
    getAllCharacters(): Promise<iCharacter[]>{
        return this.gotService.getAllCharacters();
    }
}
