class todoentry{
    id: number;
    title: string;
    description?: string;
    isDone?: number;

    constructor(id:number, title:string){
        this.id = id
        this.title = title
    }
    render(){
        return `<div class="card card-body mt-1 shadow">
        <p> ID: ${this.id}</p>
        <p> Title: ${this.title}</p>
        <p> Description: ${this.description}</p>
        <p> Is done: ${this.isDone}</p>  
        </div>`;
    }
}
