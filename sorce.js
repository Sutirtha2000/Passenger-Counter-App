let countEl=document.getElementById("counter")
let saveEl=document.getElementById("save")
let entriesEl=document.getElementById("entries")
let count=0
function incrementFun()
{
    count+=1;
    countEl.textContent=count;
}
saveEl.addEventListener("click",function(){
    let countStr=count+" - "
    entriesEl.textContent+=countStr;
    count=0
})
