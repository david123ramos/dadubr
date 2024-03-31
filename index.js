
document.documentElement.classList.add('terracotta-theme');


const map = {
    1 : "Gena",
    2 : "Elizabeth e Wellington",
    3 : "Giba e Yasmim"
};

window.onload = function() {


    const n1 = document.querySelector("#nm1");
    const n2 = document.querySelector("#nm2");
    const n3 = document.querySelector("#nm3");

    const urlParams = new URLSearchParams(window.location.search);
    const user = map[urlParams.get('u')];
    if(!user) {
        return;
    }

    if(user.includes(" ")){
        n2.textContent = "&";
        n3.textContent = user.split(" ")[2];
        n1.textContent = user.split(" ")[0];
    }else{
        n1.innerHTML = user;
    }

}


function sendToMain(){
    window.location.href = "./main/main.html"
}


