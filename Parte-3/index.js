document.getElementById('submit').addEventListener("click",addComent);

function addComent(){
    document.getElementById('submit').preventDefault;
    let username = document.getElementsByClassName('userName')[0];
    let userComent = document.getElementById('userComment');
    let coments = document.getElementsByClassName('seccionComments')[0].innerHTML;
    if (username.value !== "" ){
        if(userComent.value !== ""){
            document.getElementsByClassName('seccionComments')[0].innerHTML = "<h2>" + username.value +"</h2>" + userComent.value + "<br></br>"  +coments;
        }
    }
}
