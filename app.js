const display=document.querySelector(".input-div");
const digits=Array.from(document.querySelectorAll('.digits'));
digits.map(button=>{
    button.addEventListener('click',(e)=>{
       
       switch(e.target.innerText){
        case `RESET`:
            display.innerText="";
            break;
            case`DEL`:
            display.innerText=display.innerText.slice(0,-1);
            break;
            case`=`:
            try {
                display.innerText=eval(display.innerText);
              
            } catch (error) {
                display.innerText="Error"
            }
            break
           ;
           default:
            display.innerText+=e.target.innerText;
            
       }
    })
})
