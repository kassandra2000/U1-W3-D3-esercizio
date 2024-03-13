const mainfunction = function () {
  const input = document.getElementById("nameInput");
  const btn = document.getElementById("btn");
  if (input.value !== "" || input.value !== " ") {
    btn.onclick = () => {
      const div = document.createElement("div");
      div.className = "card-style";
      const section = document.getElementById("section-2");
      section.appendChild(div);
      const p = document.createElement("p");
      p.innerText = "nome-card";
      div.appendChild(p);

      p.innerText = input.value; //valore
      input.value = "";
    };
  } else {
    btn.onclick = () => {
      while (input.value === "" || input.value === " ") {
        alert("EHI DEVI INSERIRE QUALCOSA QUI!!!");
      }
    };
  }
  console.log(input.value)
};

const main = document.querySelector("main");
main.onclick = mainfunction;
