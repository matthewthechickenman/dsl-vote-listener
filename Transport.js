class Transport {
    constructor() {
        this.events = [];
    }

    send(message) {
        this.events.forEach(ev => ev.r(message));           
    }

    recieve(r) {
        this.events.push({i: this.events.length + 1, r});
    }

    remove(i) {
        this.events.splice(i, 1);
    }
}