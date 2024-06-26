class Task {
    constructor(title) {
        this.id = Task.incrementId();
        this.title = title;
        this.completed = false;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
    }
}

const tasks = [];

module.exports = { Task, tasks };
