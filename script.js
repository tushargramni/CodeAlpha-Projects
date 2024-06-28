let i = document.querySelector(".number");
let op = 0,
  v = 0,
  c = 0;

let val = (e) => {
  if (c === 0) {
    i.innerHTML = "";
  }
  if (e === "=") {
    i.innerHTML = eval(i.innerHTML);
  } else if (e == "C") {
    i.innerHTML = 0;
    i.innerHTML = "";
  } else if (e === "+" || e === "-" || e === "*" || e === "/" || e === "%") {
    op = i.innerHTML;
    // console.log(op, typeof(op),i.innerHTML.length);
    if (op === "" || op === "0") {
      i.innerHTML = "";
    } else if (
      op[op.length - 1] === e ||
      op[op.length - 1] === "*" ||
      op[op.length - 1] === "/" ||
      op[op.length - 1] === "+" ||
      op[op.length - 1] === "-" ||
      op[op.length - 1] === "%"
    ) {
      op = op.slice(0, op.length - 1);
      op += e;
      i.innerHTML = op;
      console.log("i : ", i.innerHTML);
    } else {
      op += e;
      i.innerHTML = op;
    }
  } else if (e === "X") {
    v = i.innerHTML;
    v = v.slice(0, v.length - 1);
    i.innerHTML = v;
  } else {
    i.innerHTML += e;
  }
  c++;
};

