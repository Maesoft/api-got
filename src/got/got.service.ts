import { Injectable } from '@nestjs/common';
import { iCharacter } from './got.interface';
const BASE_URL:string="http://localhost:3030"
@Injectable()
export class GotService {
   async getAllCharacters():Promise<iCharacter[]>{
        const res = await fetch(BASE_URL);
        const data = await res.json();
        return data;
    }
}
