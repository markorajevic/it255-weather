export class City {
    distance: number;
    title: string;
    woeid: number;

    constructor(distance: number, title: string, woeid: number) {
        this.distance = distance; 
        this.title = title;
        this.woeid = woeid;
    }
}
