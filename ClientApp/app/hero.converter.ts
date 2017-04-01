import { Injectable } from '@angular/core';

import { Hero } from './hero';

export class HeroConverter {

    static ToArray(json: String): Hero[] {
              
        let heroes: Hero[] = new Array<Hero>();
        Object.assign(heroes, json);    
        return heroes;
    }

    static Single(json: String): Hero {

        let hero: Hero = new Hero();
        Object.assign(hero, json);
        return hero;
    }
}