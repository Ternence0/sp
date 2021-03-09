function ToggleStyle(a, b, c, d) {
  a = "#" + a;
  0 == c ? $(a).toggleClass(b) : $(a).toggleClass(b, c, d)
}

function Q1() {
ToggleStyle('sec-A1', 'sec1_a_blkA', 200, 'linear');
return false;
}

function Q2() {
ToggleStyle('sec-A2', 'sec1_a_blkA', 200, 'linear');
return false;
}

function Q3() {
ToggleStyle('sec-A3', 'sec1_a_blkA', 200, 'linear');
return false;
}

function Q4() {
ToggleStyle('pic1', 'pic_hiddenA', 200, 'linear');
return false;
}

function Q5() {
ToggleStyle('pic2', 'pic_hiddenA', 200, 'linear');
return false;
}

function Q6() {
ToggleStyle('pic3', 'pic_hiddenA', 200, 'linear');
return false;
}











