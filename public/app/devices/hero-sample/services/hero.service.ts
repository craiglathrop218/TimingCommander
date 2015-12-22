import {Injectable} from 'angular2/core';
import {HEROES} from './../data/mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        // 2 seconds
        return new Promise(resolve => setTimeout(()=>resolve(HEROES), 2000));
    }
}
