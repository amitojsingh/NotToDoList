var $=function(id){
return document.getElementById(id);
}
window.onload=function(){
    var design=localStorage.theme;
    if (design=="dark"){
    document.body.className=design;
    }
    else if(design=="light"){
        document.body.className.replace(design,"");
    }
    
$('newItem').focus();
    }

var submitInput=function(){
    var disp=$('display');
    var item=$('newItem').value;
    var listItem=document.createElement("li");
    var checkBox=document.createElement("input");
    var label=document.createElement("label");
    label.innerText=item;
    checkBox.type="checkbox";
    listItem.appendChild(checkBox);
	listItem.appendChild(label);
    disp.append(listItem);
    $('newItem').value="";
    }