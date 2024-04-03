const myForm = document.querySelector("#My_form");
let inputName = document.querySelector("#Text");
let inputNumber = document.querySelector("#Number");
let Sub = document.querySelector(".Click")
let Prg = document.querySelector(".Msg")
let Prg2 = document.querySelector(".msg")

myForm.addEventListener('submit',MySmS)


function MySmS(e){
    e.preventDefault();
    // console.log(e);
    if(inputName.value === '' || inputNumber.value === ''){
        console.log("Error : You Shuod Enter Your Name And Your Age!!!!");
        Prg.innerHTML = "<h3> Error : You Shuod Enter Your Name And Your Age!!!!</h3>";
    }else{
        Prg.innerHTML =`<h5> Your Name Is ${inputName.value} And Your Age Is ${inputNumber.value}</h5>` ;
    }
    if(inputNumber.value >= 18 ){
        Prg2.style.backgroundColor = "green";
        Prg2.innerHTML = `Welcome To My Page...! And Your DateYers Is ${2024 - inputNumber.value} `;
    }else{
        Prg2.style.backgroundColor = "red";
        Prg2.innerHTML = ` Your Age Is Ander 18 And You DateYers is ${2024 - inputNumber.value}`;
    }

    setTimeout((e)=>{
        inputName.value ='';
        inputNumber.value = '';
    }, 2000)

    const Myarry = [];

    
    function localS(){
        
        let myObj = {
            id : Date.now(),
            name : inputName.value,
            age : inputNumber.value,
        }
        
        
       
        console.warn('added',{Myarry} );
        //in a way the length of the array is considered to be one and the content is only added to the zero index
        Myarry.push(myObj); 
        let Data = JSON.stringify(Myarry);
        localStorage.setItem("Users ", Data);
    }
    localS()
    
    }



