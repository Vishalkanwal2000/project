const title=document.getElementById("input1");
const descrpition =document.getElementById("desc");
const form=document.querySelector("form");
const c=document.querySelector(".contanior");


const tasks=localStorage .getItem("tasks")
?JSON.parse(localStorage.getItem("tasks")):[];

showAlltask();



function showAlltask(){

  tasks.forEach((value,index) =>{
  
    const div=document.createElement("div");
    div.setAttribute("class","task");

    const innerdiv =document.createElement ("div");
    div.append(innerdiv);

    const p=document.createElement("p");
    p.innerText=value.title;
    innerdiv.append(p);


    const span = document.createElement("span");
    span.innerText = value.description;
    innerdiv.append(span);

    const btn=document.createElement("button");
     btn.setAttribute("class","buto");
 
     btn.innerText="-";

     btn.addEventListener("click",()=>{
      removetask();
       tasks.splice(index,1);
       localStorage.setItem("tasks",JSON.stringify(tasks));
       showAlltask();

     });

     div.append(btn);
     c.append(div);

     
  });

}
function removetask(){
tasks.forEach(()=>{
const div=document.querySelector(".task");
div.remove();


}); 

}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
removetask();
tasks.push({
  title: title.value ,
  dicription:descrpition.value,
});
 localStorage.setItem("tasks",JSON.stringify(tasks));

showAlltask();
});

