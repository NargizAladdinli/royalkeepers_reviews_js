//Text length Limit

const myText = document.querySelectorAll('#my-text');
const result = document.querySelectorAll("#result");
const limit = 1000;

myText.forEach((item, index) => {
    resul()
    item.addEventListener("input", () => {
        const length = item.value.length;
        result[index].textContent = length + "/" + limit;
        if(length > limit){
            item.style.borderColor = "red";
            result[index].style.color = "red"
        }else{
            item.style.borderColor = "#B7A259";
            result[index].style.color = "black";
        }
    })
})

function resul(){
    result.forEach(item=>{
        item.textContent = 0 + "/" + limit;
    })
}