let like2 = parseInt(localStorage.getItem('count2')) || 0;

function likepost(){
    like2++;    
    update();
    localStorage.setItem('count2',like2);
}

function update(){
    const btnElement = document.getElementById("shape2");
    if (like2 != 0){
        btnElement.className = "fa fa-thumbs-up";
    }

    const countElement = document.getElementById("count2");
    countElement.textContent = like2;
}

update();
