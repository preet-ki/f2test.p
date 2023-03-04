document.getElementById("create").addEventListener("click", createForm);
function createForm(){
    var form=document.createElement("form");
    var h=document.createElement("h2");
    var t=document.createTextNode("Create a post");
    h.appendChild(t);
    form.appendChild(h);
    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Enter your heading...");
    form.appendChild(input);
    var texts=document.createElement("textarea");
    texts.setAttribute("type","text");
    texts.setAttribute("placeholder","Enter your blog post..");
    form.appendChild(texts);
    var sub=document.createElement("input");
    sub.setAttribute("type","submit");
    sub.setAttribute("value","Publish Post");
    form.appendChild(sub);
    var subs=document.createElement("input");
    subs.setAttribute("type","submit");
    subs.setAttribute("value","Cancel post");
    form.appendChild(subs);
    document.getElementsByTagName("body")[0].appendChild(form);
}
document.getElementsByClassName("edits").addEventListener("click",editForm);
function editForm(){
    var form=document.createElement("form");
    var h=document.createElement("h2");
    var t=document.createTextNode("Edit a post");
    h.appendChild(t);
    form.appendChild(h);
    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","My heading");
    form.appendChild(input);
    var texts=document.createElement("textarea");
    texts.setAttribute("type","text");
    texts.setAttribute("placeholder","Enter your blog post..");
    form.appendChild(texts);
    var sub=document.createElement("input");
    sub.setAttribute("type","submit");
    sub.setAttribute("value","Save a Post");
    form.appendChild(sub);
    var subs=document.createElement("input");
    subs.setAttribute("type","submit");
    subs.setAttribute("value","Delete post");
    form.appendChild(subs);
    document.getElementsByTagName("body")[0].appendChild(form);
}

