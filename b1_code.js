let like1 = parseInt(localStorage.getItem('count1')) || 0;

function likepost(){
    like1++;    
    update();
    localStorage.setItem('count1',like1);
}

function update(){
    const btnElement = document.getElementById("shape1");
    if (like1 != 0){
        btnElement.className = "fa fa-thumbs-up";
    }
    
    const countElement = document.getElementById("count1");
    countElement.textContent = like1;
}

update();
