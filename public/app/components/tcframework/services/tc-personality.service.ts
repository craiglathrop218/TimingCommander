import {Injectable} from 'angular2/core';
import {TCPersonality} from "../data/tc-personality";

@Injectable()
export abstract class TCPersonalityService {
    abstract getPersonality() : TCPersonality;
}
