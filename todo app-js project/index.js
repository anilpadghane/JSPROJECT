const addList = document.getElementById("add");
const last = document.querySelector(".last");

addList.addEventListener("click", () => {
  const card = document.createElement("div");
  card.className = "card";

  const cardHeading = document.createElement("p");
  cardHeading.innerText = "Add New List";

  const cardInput = document.createElement("input");
  cardInput.type = "text";
  cardInput.placeholder = "Enter The Name";
  cardInput.style.textAlign = 'center';
  cardInput.id = "name";

  const btnAdd = document.createElement("div");
  btnAdd.className = "button";
  btnAdd.innerText = "Add";

  const btnClose = document.createElement("div");
  btnClose.className = "button";
  btnClose.innerText = "Close";

  document.querySelector(".main").classList.add("blur");
  last.appendChild(card);

  const warning = document.createElement("p");
  warning.innerText = " Please Enter Text";
  warning.style.display = "none";

  card.appendChild(cardHeading);
  card.appendChild(cardInput);
  card.appendChild(btnAdd);
  card.appendChild(btnClose);
  card.appendChild(warning);

  btnClose.addEventListener("click", () => {
    last.removeChild(card);
    document.querySelector(".main").classList.remove("blur");
  })

  btnAdd.addEventListener("click", () => {
    if (cardInput.value === "") {
      warning.style.fontSize = "0.7rem"
      warning.style.display = "block";
    }
    else {
      document.getElementById("t-4").style.display = "none";
      last.removeChild(card);
      document.querySelector(".main").classList.remove("blur");

      const card1 = document.createElement("div");
      card1.className = "cards";

      const listName = document.createElement("span");
      listName.id = "title";
      listName.innerText = cardInput.value;

      const ele = document.createElement("hr");
      ele.style.color = "black";
      listName.appendChild(ele);

      const element = document.createElement("div");
      element.className = "buttons";
      const add = document.createElement("i");
      add.className = "fa-solid fa-circle-plus";

      const del = document.createElement("i");
      del.className = "fa-solid fa-trash-can";
      del.style.color = "red";

      const conTwo = document.querySelector(".conTwo");
      conTwo.appendChild(card1);
      card1.appendChild(listName);
      card1.appendChild(element);
       

      element.appendChild(add);
      element.appendChild(del);
           

      del.addEventListener("click", () => {
        document.querySelector(".conTwo").removeChild(card1);
        if (document.querySelector(".conTwo").innerText === "") {
          document.querySelector("#t-4").style.display = "block";
        }
      })

      add.addEventListener("click", () => {
        const card = document.createElement("div");
        card.className = "card";

        const heading = document.createElement("p");
        heading.innerText = "Add New List";

        const cardInput = document.createElement("input");
        cardInput.type = "text";
        cardInput.placeholder = "Enter The Name";
        cardInput.style.textAlign = 'center';
        cardInput.id = "name";

        const plus = document.createElement("div");
        plus.className = "button";
        plus.innerText = "Add";

        const btnClose = document.createElement("div");
        btnClose.className = "button";
        btnClose.innerText = "Close";

        document.querySelector(".main").classList.add("blur");
        last.appendChild(card);

        const warning = document.createElement("p");
        warning.innerText = " Please Enter List Name!!";
        warning.style.display = "none";

        card.appendChild(heading);
        card.appendChild(cardInput);
        card.appendChild(plus);
        card.appendChild(btnClose);
        card.appendChild(warning);

        btnClose.addEventListener("click", () => {
         last.removeChild(card);
          document.querySelector(".main").classList.remove("blur");
        })

        plus.addEventListener("click", () => {
          if (cardInput.value === "") {
            warning.style.fontSize = "0.7rem"
            warning.style.display = "block";
          }
          else {
            last.removeChild(card);
            document.querySelector(".main").classList.remove("blur");

            const ul = document.createElement("ul");
            ul.style.listStyleType = "none";
            ul.className = "ul";

            let li = document.createElement('li');
            let btn1 = document.createElement('button');

            btn1.innerText = "Mark done";
            btn1.style.margin = "5px";
            btn1.style.backgroundColor = "skyblue";
            btn1.style.borderRadius = "25px";
            btn1.style.border = "2px solid transparent";
            li.innerText = cardInput.value;
            card1.appendChild(ul);
            ul.appendChild(li);
            li.appendChild(btn1);
            btn1.addEventListener('click',
              function () {
                li.style.textDecoration = "line-through";
                li.style.color = "black";
                li.removeChild(btn1);
              })
          }
        })
      })

      listName.addEventListener("click", () => {

        const wholeCard = document.querySelector(".main");
        wholeCard.style.visibility = "hidden";

        const newPage = document.querySelector(".new-page");
        newPage.style.visibility = "visible";
         
        const conFirst = document.querySelector(".conFirst");
        conFirst.style.visibility = "visible";

        let div = document.createElement("div");
        div.className = "new";
        newPage.appendChild(div);

        let div1 = document.createElement("div");
        div1.className = "btn-text";
        div.appendChild(div1);

        let leftArrow = document.createElement("i")
        leftArrow.className = "fa-solid fa-circle-arrow-left";
        div1.appendChild(leftArrow);

        let back = document.createElement("span");
        back.className = "back";
        back.innerText = "Back";
        div1.appendChild(back);

        let h1 = document.createElement("h1");
        h1.innerText = cardInput.value;
        h1.className = "h1";
        h1.style.color = "white";
        div.appendChild(h1);
        let div2 = document.createElement("div");
        div2.className = "new-card";
        div2.appendChild(card1);
        newPage.appendChild(div2);

        leftArrow.addEventListener("click", () => {
          div2.removeChild(card1);
          newPage.removeChild(div);
          conTwo.appendChild(card1);
          document.querySelector(".main").style.visibility = "visible";
          document.querySelector(".new-page").style.visibility = "hidden";
        })

        del.addEventListener("click", () => {
          document.querySelector(".main").style.visibility = "visible";
          document.querySelector(".new-page").style.visibility = "hidden";
          document.querySelector(".new-page").removeChild(div);
          div2.removeChild(card1);
        })
       
      })

    }
  })




})
