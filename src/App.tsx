
import './App.css'

function App() {

    let age:number = 22;
    let ageMessage: string = "";
    const n: number = 10;
    let christmasTree: string = "";
    let score: number = 0;
    let username : string = "";
    let isAdmin : boolean = false;

    for(let i : number = 0; i<age; i++){
        console.log(i);
    }
    if(age>18){
        ageMessage = "Du bist erwachsen";
    } else{
        ageMessage = "Du bist noch minderjährig"
    }
    if(score){
        console.log("Score is evaluated as truthy")
    } else{
        console.log("Score is evaluated as falsy")
    }
    if(username !== undefined){
        console.log("Username is available")
    }
   if(username){
       console.log("Username is falsy")
   }
   if(isAdmin){
       console.log("isAdmin is evaluated as truthy")
   }
   if(isAdmin === false){
       console.log("isAdmin is false")
   }

    for(let i :number = 0; i<2* n; i++){
        if(i<n){
            christmasTree += "*".repeat(2*i+1)+ "\n ";
        }
        if(i>=n){
            christmasTree +="*\n ";
        }
    }

    return (
    <>
        <h1> {ageMessage} in jedem Fall schaue dir diesen Baum an! </h1>
        <pre> {christmasTree}</pre>

    </>
  )
}

export default App
