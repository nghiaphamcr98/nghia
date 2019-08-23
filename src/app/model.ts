

export class Model
{
    user;
    items;

    constructor()
    {
        this.user = "Adam";
        this.items = [new NghiaItem("Buy Flowers",false),
                     new NghiaItem("Get Shoes",false),
                     new NghiaItem("Collect Tickets",true),
                     new NghiaItem("Call Joe",false)    ]
    }
}
export class NghiaItem
{
    action;
    done;

    constructor(action,done)
    {
        this.action = action;
        this.done = done;
    }
}

/*var model = 
{
    user: "Adam"
    items: [{ {action: "Buy Flowers", done: false},
        { action: "Get Shoes", done: false},
        { action: "Collect Tickets", done: true},
        { action: "Call Joe", done: false} }]
        
}*/