


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

let a=function(){
  
  let ima=document.getElementById('two');
  ima.style.display='block';
  
  setTimeout(function(){
    ima.style.display='none';
  },2000);
};