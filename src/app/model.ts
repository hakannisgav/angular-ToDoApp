export class Model {
    items;

    /**
     *
     */
    constructor() {
        this.items = [
            new ToDoItem("Spor",false),
            new ToDoItem("Kahvalti", false),
            new ToDoItem("Fatura", false),
            new ToDoItem("Sinema", false)
        ];
    }
}


export class ToDoItem{
    description;
    action;

    /**
     *
     */
    constructor(description: String, action: Boolean) {
        this.description = description;
        this.action = action;
        
    }
}