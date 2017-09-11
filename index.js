function getFirstSelector(selector){
        return document.querySelector(selector);
}
function nestedTarget(){
    return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n){
    var lis = document.querySelector("#app").querySelectorAll(".ranked-list li");
    for (let i = 0; i < lis.length; i++) {
        var num = parseInt(lis[i].innerHTML) ;
        lis[i].innerHTML = (num+=n).toString();
    }
}

function deepestChild(){
     var grand = document.querySelector("#grand-node");
     var div = grand.children[3];
     var boo = div.querySelector("div").innerHTML;
     return boo;



}
