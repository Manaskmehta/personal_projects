window.onload = () => {
  let input = document.querySelector("#task");
  // input.focus();
  input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      add(event);
    }
  });
};
function add(e) {
  e.preventDefault();
  let task = document.querySelector("#task").value.trim();

  if (task === "") {
    alert("Please Enter The Value");
    return;
  }
  let showtodo = document.getElementById("showtodo");
  let adddiv = document.createElement("div");
  adddiv.classList.add("task");


  let addcheckbox = document.createElement("input");
  addcheckbox.setAttribute("type", "checkbox");
  addcheckbox.classList.add("checkbox");

  let todoadd = document.createElement("input");
  todoadd.setAttribute("type", "text");
  todoadd.setAttribute("id", "name");
  todoadd.setAttribute("readonly", "readonly");
  todoadd.value = task;

  let editbtn = document.createElement("button");
  editbtn.innerText = "Edit";
  editbtn.classList.add("editbtn");

  let deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.classList.add("deletebtn");

  document.getElementById("task").value = "";

  adddiv.appendChild(addcheckbox);
  adddiv.appendChild(todoadd);
  adddiv.appendChild(editbtn);
  adddiv.appendChild(deletebtn);

  let position = showtodo.firstElemeentChild;
  if (position == null) {
    showtodo.appendChild(adddiv);
  } else {
    showtodo.insertBefore(adddiv, position);
  }

  editbtn.addEventListener("click", () => {
    if (editbtn.innerText.toLowerCase() == 'edit') {
      todoadd.removeAttribute("readonly");       
      todoadd.focus();
    } else {
      editbtn.innerText = 'Edit'
      todoadd.setAttribute("readonly", "readonly");
    }
  });

  deletebtn.addEventListener("click", () => {
    if (confirm("Are You Sure For Delete ?")) {
      showtodo.removeChild(adddiv);
    }
  });

  addcheckbox.addEventListener("click", () => {
    if (confirm("Is Completed?")) {
      let finalshow = document.getElementById("finalshow");
      finalshow.appendChild(adddiv);
      adddiv.removeChild(deletebtn);
      adddiv.removeChild(editbtn);
      addcheckbox.disabled = true;
    }
    else {
      addcheckbox.checked = false;
    }
  });
}      









