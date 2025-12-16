import type { Hero } from "./heroes.interfaces";

export interface SummaryInformationResponse {
    totalHeroes:   number;
    strongestHero: Hero;
    smartestHero:  Hero;
    heroCount:     number;
    villainCount:  number;
}

