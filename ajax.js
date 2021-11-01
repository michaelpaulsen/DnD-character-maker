var classes = null; 

function displayStats(d){
  let baseUrl = ""
  let el = document.getElementById("output"); 
  let x;
  
  if(d?.results) classes = d?.results;
  x = Math.floor(Math.random()*classes.length);  
  className =  classes[x]?.name; 
  el.innerHTML = '<a class = "Generated_class" href = "./classes.html?className='+className+'"> class : ' + className +  '</p>';
}
function makeCharictar(){ 
  /* doing it this way limits the API calls to once per a refresh*/ 
  if(classes == null){ 
    $.ajax({
      url:  "https://www.dnd5eapi.co/api/classes",
      success: (d)=>{console.log("calling api"); displayStats(d)}
    }).then((d)=>{rollStats()})
  }else{ 
    displayStats()
    rollStats()
  }
  return classes; 
}
function getClassData(Class){ 
  $.ajax({
      url:  "https://www.dnd5eapi.co/api/classes/"+Class,
      success: (d)=>{console.log("d",d); }
    })
}