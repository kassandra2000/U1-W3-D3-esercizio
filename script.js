const mainfunction = function () {
  const input = document.getElementById("nameInput");
  const btn = document.getElementById("btn");
  const form = document.querySelector("#section-1 form");

  form.onsubmit = (e) => {
    e.preventDefault();

    const div = document.createElement("div");
    div.className = "card-style";

    const p = document.createElement("p");
    const btn2 = document.createElement("button");
    btn2.innerText = "X";
    p.appendChild(btn2);
    p.innerText = input.value; //valore
    div.appendChild(p);
    const section = document.getElementById("section-2");
    section.appendChild(div);
    input.value = "";
  };
  //   } else {
  //     btn.onclick = () => {
  //      if (input.value === "" || input.value === " ") {
  //         alert("EHI DEVI INSERIRE QUALCOSA QUI!!!");
  //       }
  //     };
};

const main = document.querySelector("main");
main.onclick = mainfunction;
