document.getElementById("create").addEventListener("click", createForm);
function createForm(){
    var form=document.createElement("form");
    form.classList.add("row");

    var h=document.createElement("h2");
    var t=document.createTextNode("Create a post");
    h.appendChild(t);
    form.appendChild(h);
    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Enter your heading...");
    form.appendChild(input).style.padding="20px";
    input.classList.add("inputs");
    var texts=document.createElement("textarea");
    texts.setAttribute("type","text");
    texts.setAttribute("placeholder","Enter your blog post..");
    form.appendChild(texts);
    texts.classList.add('texts');
    var sub=document.createElement("input");
    sub.setAttribute("type","submit");
    sub.setAttribute("value","Publish Post");
    form.appendChild(sub);
    sub.classList.add('sub');
    var subs=document.createElement("input");
    subs.setAttribute("type","submit");
    subs.setAttribute("value","Cancel post");
    form.appendChild(subs);
    subs.classList.add('subs');
    var deletes= document.getElementById("deletes");
    deletes.innerHTML = "&#10060;"; 
      deletes.addEventListener("click", function() {
        this.form.style.display = 'none';

});
deletes.classList.add('del');


    document.getElementsByTagName("body")[0].appendChild(form);
}
document.getElementsByClassName("edits").addEventListener("onclick",editForm);
function editForm(){
    var form=document.createElement("form");
    form.classList.add("row");

    var h=document.createElement("h2");
    var t=document.createTextNode("Edit a post");
    h.appendChild(t);
    form.appendChild(h);
    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","My heading");
    input.classList.add("inputs");

    form.appendChild(input);
    var texts=document.createElement("textarea");
    texts.setAttribute("type","text");
    texts.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum accusantium corrupti quasi voluptate? Soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum accusantium corrupti quasi voluptate? Soluta?"
    form.appendChild(texts);
    texts.classList.add('texts');



    var sub=document.createElement("input");
    sub.setAttribute("type","submit");
    sub.setAttribute("value","Save a Post");
    sub.classList.add('sub');

    form.appendChild(sub);
    var subs=document.createElement("input");
    subs.setAttribute("type","submit");
    subs.setAttribute("value","Delete post");
    form.appendChild(subs);
    subs.classList.add('subs');

    document.getElementsByTagName("body")[0].appendChild(form);
}

