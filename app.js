var mainBox = document.getElementById("main");

var title = document.createElement("h1");
mainBox.appendChild(title);
var title2 = document.createTextNode("Todo App");
title.appendChild(title2);
title.setAttribute("class", "title");

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "mainInput");
mainBox.appendChild(mainDiv);

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter any word");
input.setAttribute("id", "input");
mainDiv.appendChild(input);

var plusBtn = document.createElement("button");
plusBtn.setAttribute("id", "plusBtn");
plusBtn.setAttribute("onclick", "addData()");
mainDiv.appendChild(plusBtn);

var plusBtnIcon = document.createElement("img");
plusBtnIcon.setAttribute("src", "./icons/plus.png");
plusBtn.appendChild(plusBtnIcon);
mainDiv.appendChild(plusBtn);
plusBtnIcon.setAttribute("id", "plusicon");

var msg = document.createElement("p");
msg.setAttribute("id", "msg");
mainBox.appendChild(msg);

var getData = document.createElement("div");
mainBox.appendChild(getData);
var dataUl = document.createElement("ul");

function addData(){
    var dataMsg = document.getElementById("input").value;
    console.log(dataMsg);

    if(dataMsg === ""){
        document.getElementById("msg").innerHTML = "Please Inter any word";
    }else{
        document.getElementById("msg").innerHTML = "";

        getData.appendChild(dataUl);

        var dataLi = document.createElement("div");
        dataLi.setAttribute("id", "liData");
        dataLi.setAttribute("class", "liData");
        dataUl.appendChild(dataLi);

        var liText = document.createElement("div");
        liText.setAttribute("id", "liText");
        dataLi.appendChild(liText);

        var liTextData = document.createTextNode(dataMsg);
        liText.appendChild(liTextData);

        //   buttons-main-div
        var liBtn = document.createElement("div");
        liBtn.setAttribute("id", "liBtn");
        dataLi.appendChild(liBtn);

        // editbutton-start
        var editBtn = document.createElement("button");
        editBtn.setAttribute("id", "checkbtn");

        var editBtnIcon = document.createElement("img");
        editBtnIcon.setAttribute("src", "./icons/edit.png");
        editBtnIcon.setAttribute("id", "img1");
        editBtn.appendChild(editBtnIcon);
        liBtn.appendChild(editBtn);

        //  dltbutton-start
        var dltBtn = document.createElement("button");
        dltBtn.setAttribute("id", "img2");

        var dltBtnIcon = document.createElement("img");
        dltBtnIcon.setAttribute("src", "./icons/delete.png");
        dltBtnIcon.setAttribute("id", "img1")
        dltBtn.appendChild(dltBtnIcon);
        liBtn.appendChild(dltBtn);

        dltBtn.addEventListener("click", function(){
             var deleteDta = dltBtn.parentNode;

             var dltData = document.createElement("div");
             dltData.setAttribute("id", "dltData");
             mainDiv.appendChild(dltData);

            var deleteLiData = document.createTextNode(dataMsg);
            deleteDta = dataLi.remove();
        })

        editBtn.addEventListener("click", function(){
            var editValue = editBtn.parentNode;
            var editPrompt = prompt("Type New Todo", liText.textContent);
            liText.innerHTML = editPrompt;
            editValue.appendChild(liBtn);
        })

        document.getElementById("input").value = "";
        
    }
}
