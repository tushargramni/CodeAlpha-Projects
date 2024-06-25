let i = document.querySelector(".number");
let op = 0,
  v = 0,
  r = 0,
  l = 0;

let val = (e) => {
  if (e === "=") {
    i.innerHTML = eval(i.innerHTML);
  } else if (e == "C") {
    i.innerHTML = "";
  } else if (e === "+" || e === "-" || e === "*" || e === "/" || e === "%") {
    op = i.innerHTML;
    // console.log(op, typeof(op),i.innerHTML.length);
    if (
      op[op.length - 1] === e ||
      op[op.length - 1] === "*" ||
      op[op.length - 1] === "/" ||
      op[op.length - 1] === "+" ||
      op[op.length - 1] === "-" ||
      op[op.length - 1] === "%"
    ) {
      op[op.length - 1] = e;
      console.log("op : ", op);
      i.innerHTML = op;
      console.log("i : ", i.innerHTML);
    } else {
      op += e;
      i.innerHTML = op;
    }
  } else if (e === "X") {
    r = 0;
    l = 0;
    b = 0;
    r = i.innerHTML;
    l = r.length;
    console.log(" l : ", l);
    for (let a = 0; a < l - 1; l++) b += r[a];
    console.log(b);
    i.innerHTML = r;
  } else {
    i.innerHTML += e;
  }
};
