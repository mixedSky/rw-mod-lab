export class Action{
    #listeners = new Set();

    addListener(listener){
        if (!(listener instanceof Function)){
            console.error(new Error("A non-function was passed"));
            debugger;
            return;
        }

        this.#listeners.add(listener);
    }

    removeListener(listener){
        if (!(listener instanceof Function)){
            console.error(new Error("A non-function was passed"));
            debugger;
            return;
        }

        this.#listeners.delete(listener);
    }

    invoke(...args){
        for(const listener of this.#listeners){
            listener(...args);
        }
    }

    removeAllListeners(){
        this.#listeners.clear();
    }
}