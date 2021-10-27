function maxRandom(max){ 
  return Math.floor(Math.random()*max)+1;
}
function makeStat(rolls){ 
  let temarr = [];
  let total = 0;  
  for(let x = 0; x < rolls; x++){
    temarr.push(maxRandom(6))
  }
  for(let y = 0; y < rolls; y++){ 
    if(temarr[y] != Math.min(...temarr)){ 
      total += temarr[y];
    }
  }
  return total;
}
//console.log($); 
for(let x = 0; x < 6; x++){ 
  //console.log(" roll :", x,", " ,); 
  $("#output").append("<p> stat " + (x+1) + " : " + makeStat(3) + "</p>"); 
}