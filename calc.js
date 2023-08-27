let string="";
let button = document.querySelectorAll("button");//input type selector //
console.log(button);// will show in array form//

//will use new for of loop (whici is specially use for array)

for(item of button)
{
    item.addEventListener("click" ,(event) =>
    {
                
                if(event.target.innerHTML==="AC"){
                    string="";
                    document.querySelector("input").value=string;
                }
                else if(event.target.innerHTML=="="){
                    string=eval(string);
                    document.querySelector("input").value=string;
                }
                else{
                    string=string+event.target.innerHTML;  
                    document.querySelector("input").value=string;
                }
            }
    )
    console.log(item);
}



// for(btn of button)
// {
//     btn.addeventlistener("click",(event)=>
//     {
//         if(event.target.innerhtml==="AC"){
//             string="";
//             document.getElementById("text").value=string;
//         }
//         else if(event.target.innerhtml=="="){
//             string=eval(string);
//             document.getElementById("text").value=string;
//         }
//         else{
//             string=string+event.target.innerhtml;  
//             document.getElementById("text").value=string;
//         }
//     }
//     )
//     console.log(btn);

// }


