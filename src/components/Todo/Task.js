class Task {

    constructor(text) {
        this.id =  Math.random() * 1000;
        this.text = text;
        this.done = false;
    }
}

export default Task;