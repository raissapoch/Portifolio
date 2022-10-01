function hiddenElements () {

    var elements = document.getElementsByClassName("itens");

    for(let index = 3; elements.length > index; index++)
    {
        if (elements[index].classList.contains("hidden__itens")) {
            elements[index].classList.remove("hidden__itens");
        } else {
            elements[index].classList.add("hidden__itens");
        }
    }
    
    buttonChangeName();

  }

  function buttonChangeName () {
    var element = document.getElementById ("projeto__botao");

    if(element.textContent == "Ver Mais"){
        element.textContent = "Ver Menos";
    }
    else{
        element.textContent = "Ver Mais";
    }

    
  }