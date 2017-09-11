function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n) {
  var lis = document.querySelector("#app").querySelectorAll(".ranked-list li");
  for (let i = 0; i < lis.length; i++) {
    var num = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = (num += n).toString();
  }
}

function deepestChild() {
  const main = document.getElementById('grand-node')
  const div = main.children[0]
  const p = div.getElementsByTagName('div')

  return p;

}
