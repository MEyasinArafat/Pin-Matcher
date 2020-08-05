 
 function pinGenerator(){
    document.getElementById("generatePin").value = Math.floor(1000 + Math.random() * 9000);
}
function insertNumber(number){
    const existingNumber = document.getElementById("pinNumber").value;
    document.getElementById("pinNumber").value = existingNumber + number;
}
function actionCount(){
    const actionCount = parseInt(document.getElementById("actionCount").innerText);
        const actionLeft = document.getElementById("actionCount").innerText = actionCount -1;
        if(actionLeft < 1){
            alert("❌ 0 Try Left. Please try again");
            document.getElementById("actionCount").innerText = 0;
            document.getElementById("submitBtn").disabled = true;
        }

//c part
function clearNumber(){
    document.getElementById("pinNumber").value = '';
}

function deleteNumber(){
    const presentValue = document.getElementById("pinNumber").value;
    if(presentValue != ''){
        document.getElementById("pinNumber").value = presentValue.slice(0, -1);
    }
}



}

function notify(id){
    document.getElementById("pinGenerator").style.display = "none";
    document.getElementById("pinInput").style.display = "none";
    if(id == "notifyMatched"){
        document.getElementById("notifyUnmatched").style.display = "none";
        document.getElementById("notifyMatched").style.display = "block";
    }
    else{
        document.getElementById("notifyMatched").style.display = "none";
        document.getElementById("notifyUnmatched").style.display = "block";
    }
}

function TryAgain(){
    actionCount();
    document.getElementById("notifyUnmatched").style.display = "none";
    document.getElementById("pinGenerator").style.display = "block";
    document.getElementById("pinInput").style.display = "block";
}


function isMatch(){
    const generatePin = document.getElementById("generatePin").value;
    const pinNumber = document.getElementById("pinNumber").value;
    if(pinNumber == ''){
        alert("Enter Pin");
    }
    else if(generatePin == pinNumber){
        notify("Matched");
    }
    else{
        notify("Unmatched");
    }
}
