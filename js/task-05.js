const nameImput = document.querySelector("#name-input");
const nameOutpnt = document.querySelector("#name-output");

nameImput.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  nameOutpnt.textContent = event.currentTarget.value;
});
