


window.onload=function(){
  
  let image1=document.getElementById('four');
  let i=0, s=['block', 'none'], t=[2000,2000];
  function show2 ()
 {i^=1
  image1.style.display=s[i];
  setTimeout(show2,t[i]);
}
show2()
}

let mag=document.getElementById('two');
setInterval(function(){
  
  setTimeout(function(){
    
    mag.style.display='block';
    setTimeout(function(){
      
      mag.style.display='none';
    },5000);
  },5000);
},5000);