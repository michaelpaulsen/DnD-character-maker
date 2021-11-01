function maxRandom(max){ 
 /**
  * returns a number from [1-max] 
  */
  return Math.floor(Math.random()*max)+1;
}
function makeStat(rolls, discard){ 
  /**
   * rolls a die rolls time and discards the worst 
   */
  let temarr = [];
  let total = 0;  
  let minNotChosen = true; 
  for(let x = 0; x < rolls; x++){
    temarr.push(maxRandom(6))
  }
  for(let y = 0; y < rolls; y++){ 
    if(temarr[y] == Math.min(...temarr) && minNotChosen &&discard){ /**
    *if the curent index is the lowest (or tied for the lowest) in the array then if we haven't already discarded a number discard this number.  
    *minNotChosen fixes a bug where if all of the numbers are the same it is zero because it never adds them
    */  
      minNotChosen = false; 
      continue;       
    }
    total += temarr[y];
    // get the total to return it

  }
  return total;
}
function rollStats(){ 
  let diemeth = document.getElementById("Dice_method"); 
  let el = document.getElementById("output"); 
  diemeth = diemeth.value; 
  for(let x = 0; x < 6; x++){ 
    let stat = makeStat (3,true); 
    if(diemeth == "3d6" ){
      stat = makeStat (3,false);
    }
    if(diemeth == "4d6k3"){
      stat = makeStat(4,true)
    }
    el.innerHTML += ("<p> stat " + (x+1) + " : " + stat + "</p>") 
  }
}