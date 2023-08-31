import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GotService } from './got.service';
import { iCharacter } from './got.interface';

@Controller('api')
export class GotController {
    constructor(private readonly gotService:GotService){}

    @Get('characters')
    getAllCharacters(): Promise<iCharacter[]>{
        return this.gotService.getAllCharacters();
    }
    @Get(':id')
    getCharacterByID(@Param('id')id:number): Promise<iCharacter>{
        return this.gotService.getCharacterByID(id);
    }
    @Post()
    addCharacter(@Body()body ): Promise<any>{
        return this.gotService.addCharacter(body)
    }
}
