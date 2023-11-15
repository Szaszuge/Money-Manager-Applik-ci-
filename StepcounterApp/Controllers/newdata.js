function setMaxDate(){
    let date = document.querySelector('#date');
    date.max =  new Date().toISOString().split("T")[0];
}

function getToday(){
    setTimeout(()=>{setMaxDate()}, 500);
}

function addSteps(){

    let date = document.querySelector('#date');
    let type = document.querySelector('#type');
    let tag = document.querySelector('#tag');
    let amount = document.querySelector('#amount');

    if (date.value == "" || tag.value == "" || amount.value == 0){
        showMessage("Nem adtál meg minden adatot!");
    }
    else{
 
                let data = {
                    date: date.value,
                    type : type.value,
                    tag : tag.value,
                    amount : amount.value	
                }

                axios.post(`${serverURL}/items`, data).then((res)=>{
                    alert('A tétel rögzítve!');
                    date.value = null;
                    type.value = "kiadas";
                    tag.value = "";
                    amount.value = 0;
                });
         
       
    }
}

getToday();
