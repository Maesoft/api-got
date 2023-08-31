import { Injectable } from '@nestjs/common';
import { iCharacter } from './got.interface';
import { log } from 'console';
const BASE_URL="http://localhost:3030/characters/"

@Injectable()
export class GotService {
   async getAllCharacters(): Promise<iCharacter[]>{
        const res = await fetch(BASE_URL);
        const data = await res.json();
        return data;
    }
    async getCharacterByID(id:number): Promise<iCharacter>{
        const res = await fetch(BASE_URL + id);
        const data = await res.json();
        return data;
    }
    async addCharacter(character:iCharacter): Promise<iCharacter>{
        const id = await this.newID();
        const newCharacter={...character, id};
        const res =  await fetch(BASE_URL,
            {
            method: 'POST', headers: {'Content-type': 'application/json',}, body: JSON.stringify(newCharacter),
            })
        const data=await res.json()
        return data

    }
    private async newID():Promise<number>{
        const characters=await this.getAllCharacters();
        const id=characters.pop().id + 1;
        return id;
    }
}
