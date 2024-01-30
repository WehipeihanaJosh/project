//Javascript Counter
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://pawfj5uijfzi6xfwkxbptlp3xi0yyrvp.lambda-url.ap-southeast-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
















//window.addEventListener('DOMContentLoaded', (event) =>{
 //   getVisitCount();
//})

//const functionApi = '';

//const getVisitCount = () => {
//    let count = 30;
//    fetch(functionApi).then(response => {
//        return response.json()
//    }).then(response =>{
//        console.log("Website called function API.")
//        count = response.count;
//        document.getElementById("counter").innerText = count;
//    }).catch(function(error){
//        console.log(error);
//    });
//    return count;
//}