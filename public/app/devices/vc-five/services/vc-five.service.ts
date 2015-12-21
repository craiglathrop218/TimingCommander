/**
 * Created by IDT on 12/19/15.
 */
import {VcFiveDevice} from '../data/vc-five-device'
//import {VersaclockFive} from '../interfaces/versaclock-five'
import {Injectable} from 'angular2/core'

@Injectable()
export class VCFiveService {

    public getSettings(){

        var dataclass = new VcFiveDevice();
        return dataclass;
    }
}