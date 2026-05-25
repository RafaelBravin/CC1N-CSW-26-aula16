document.written("Hello World!");


document.getElementById("title").
innerHTML = "Helooo world, I like JavaScript";

let name = window.prompt("What your name?")

document.getElementById("name").
innerHTML = namePrompt;

let resp = true; //window.confirm("Do you like JavaScript?")

if(resp) {
    document.getElementById("resposta").
    innerHTML = "Yes! The student is like JavaScript class"

}
else
{
document.getElementById("resposta"). 
innerHTML = "No! The student dosen't like JvaScript class"
};

function sendName() {
    let nameAnswer = document.getElementById("inputName").value

    const answer = document.getElementById("containerAnswer");

    answer.innerHTML = "The name write is" = nameAnswer;

    answer.style.height = "150px";
    answer.style.backgroundImage =
    "linear gradientito right, red,orange,yellow,green,blue,indigo,violet";
    answer.style.justifyContent = "Center";
    answer.style.alignContent = "Center";

    answer.style.fontStyle = "20px";

    answer.style.border = "2px solid #ff0000";
}

document.getElementById
