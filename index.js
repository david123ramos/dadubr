
document.documentElement.classList.add('terracotta-theme');


const map = {
    1 : "Vovó Luíza",
    2 : "Vovó Esther",
    3 : "Tia Ozani e Tainá",
    4 : "Tia Hozana e Dorgival",
    5 : "Tia Bete e Wellignton [filhos]",
    6 : "Tia Eliza e filhos",
    7 : "Halan e Camila",
    8 : "Gabriel e Liz",
    9 : "Tia Cris e Carlos [filhos]",
    10: "Tia Fátima e Tio Mano [filhos]",
    11: "Val e Márcio [filhos]",
    12: "Peta",
    13: "Rogério e Daisy",
    14: "Aldenice",
    15: "Pink group",
    16: "Ana Lícia",
    17: "Vini e Clécia",
    18: "Lays",
    19: "Klésia e Duda",
    20: "Danilo e Vitória",
    21: "Guigo",
    22: "Adriano",
    23: "Sérgio e Josiane",
    24: "Teffy e Jean",
    25: "Nilda",
    26: "Giovana e Rivaldo",
    27: "Pirro e Bela",
    28: "André e Nadjane",
    29: "Rose, Bryan e Ryan",
    31: "Luaninha, Nic e Markus",
    32: "vó Vicentina",
    33: "Gena e Hebe",
    34: "Giba e Yasmin",
    35: "Rozanna, Mateus e Daniel",
    36: "Eva",
    37: "Toni, Mari e Heitorzinho",
    38: "Leo",
    39: "Geyson e Pri",
    40: "Ieverton",
    41: "Lau e Carlos",
    42: "Carlos Macena",
    43: "Tia Mônica, Igor e Sophia",
    44: "Erlinho",
    45: "Clebeson e Rau",
    46: "Emelly e Filipe",
    47: "Agni e Thay",
    48: "Tio Leo",
    49: "Adriana e Nildo",
    50: "Caio e Adnete",
    53: "Tia Altamira e prima Zilvanice",
    54: "Bruninha",
    55: "Victor e Tiago",
    56: "Natália e Lelê",
    57: "Ítalo e Denise",
    58: "Daniels e Maria Quitéria",
    59: "Aldeci e Maria",
};




!function() {
    
    const n1 = document.querySelector("#nm1");
    const n2 = document.querySelector("#nm2");
    const n3 = document.querySelector("#nm3");
    const n4 = document.querySelector("#nm4");

    const urlParams = new URLSearchParams(window.location.search);
    let user = map[urlParams.get('u')];
    if(!user) {
        alert("Usuário não encontrado");
        window.location.href = "https://www.google.com";
        return;
    }
    
    if(user.includes(" e ")){
        
        if(user.includes("[filhos]")) {
            user = user.replace("[filhos]", "");
            n4.textContent = "e filhos";
            n4.classList.remove("d-none");
        }
        
        n2.textContent = "&";
        n3.textContent = user.split(" e ")[1];
        n1.textContent = user.split(" e ")[0];
        
    
    }else{
        n1.innerHTML = user;
    }
}();




function sendToMain(){
    window.location.href = "./main/main.html"
}


