import {TCPersonalityService} from "../../../components/tcframework/services/tc-personality.service";
import {Injectable} from "angular2/core";
import {DemoWiz1Personality} from "../data/demowiz1-personality";
import {TCPersonality} from "../../../components/tcframework/data/tc-personality";

@Injectable()
export class DemoWiz1Service extends TCPersonalityService {
    getPersonality():TCPersonality {
        return new DemoWiz1Personality();
    }
}