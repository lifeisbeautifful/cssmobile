;(function gallery(){
    let leftArrow=document.getElementById('leftArrow');
    let rightArrow=document.getElementById('rightArrow');
    centerValue=1;
    maxImageNumber=8;
        
        leftArrow.addEventListener('click', moveBackward);
        rightArrow.addEventListener('click', moveForward);
        
        function moveBackward(){
            let image=document.getElementById('image');
            centerValue--;
            if(centerValue==0){centerValue=maxImageNumber};
            image.setAttribute('src', ''+ centerValue+'.jpg');
        };
        
        function moveForward(){
           let image=document.getElementById('image');
            centerValue++;
           if(centerValue> maxImageNumber){centerValue=1}
           image.setAttribute('src', ''+ centerValue+'.jpg');
        };


    
})();