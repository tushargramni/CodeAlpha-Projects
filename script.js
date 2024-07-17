let i = document.querySelector(".number");
 op = 0,
  v = 0,
  c = 0;

 val = (e) => {
  if (c === 0) {
    i.innerHTML = "0";
  }
  if (e === "=") {
    try {
      i.innerHTML = eval(i.innerHTML);
    } catch {
      i.innerHTML = "Error";
    }
  } else if (e == "C") {
    i.innerHTML = "0";
  } else if (e === "+" || e === "-" || e === "*" || e === "/" || e === "%") {
    op = i.innerHTML;
    if (
      op === "" || 
      op === "0" || 
      "+-*/%".includes(op[op.length - 1])
    ) {
      // Replace the last operator if there's any
      i.innerHTML = op.slice(0, -1) + e;
    } else {
      i.innerHTML += e;
    }
  } else if (e === "X") {
    v = i.innerHTML;
    if (v.length === 1) {
      i.innerHTML = "0";
    } else {
      v = v.slice(0, v.length - 1);
      i.innerHTML = v;
    }
  } else {
    if (i.innerHTML === "0" && e !== ".") {
      i.innerHTML = e;
    } else if (i.innerHTML.includes('.') && e === '.') {
      // Prevent multiple dots in the same number
      return;
    } else {
      i.innerHTML += e;
    }
  }
  c++;
};
 

// // Attach event listeners to buttons (if not already done)
// document.querySelectorAll(".button").forEach(button => {
//   button.addEventListener("click", () => val(button.innerHTML));
// });
