
import {makeAutoObservable, observable} from "mobx";

class Counter{
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    incriment(){
        this.count++;
    }
    decriment(){
        this.count--;
    }
}

export default new Counter();