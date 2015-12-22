import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'
import {HeroDetailComponent} from '../components/hero-detail.component';
import {Hero} from '../interfaces/hero';
import {HeroService} from '../services/hero.service'

@Component({
    selector: "hero-list",
    templateUrl: "app/devices/hero-sample/components/hero-list.component.html",
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class HeroList implements OnInit {
    public title = 'Tour of Heroes!';
    public selectedHero:Hero;
    public heroes : Hero[];

    constructor(private _heroService: HeroService) {}

    getHeroes() {
        this._heroService.getHeroes().then(resolvedHeroes => this.heroes = resolvedHeroes);
        //this._heroService.getHeroesSlowly().then(resolvedHeroes => this.heroes = resolvedHeroes);
    }


    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        console.log("onSelect")
        console.log(hero)
        this.selectedHero = hero;
    }
}
