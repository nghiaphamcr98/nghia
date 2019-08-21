export class nghiaItem
{
    action;
    done;

    constructor(action,done)
    {
        this.action = action;
        this.done = done;
    }
}

export class Model
{
    user;
    items;

    constructor()
    {
        this.user = "Adam";
        this.items = [new nghiaItem("Buy Flowers",false),
                     new nghiaItem("Get Shoes",false),
                     new nghiaItem("Collect Tickets",false),
                     new nghiaItem("Call Joe",false)    ]
    }
}


/*var model = 
{
    user: "Adam"
    items: [{{ action: "Buy Flowers", done: false},
        { action: "Get Shoes", done: false},
        { action: "Collect Tickets", done: true},
        { action: "Call Joe", done: false} }]
        
}*/