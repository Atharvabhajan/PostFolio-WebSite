function colorchd()
{
    let di=document.querySelector("body");
    let f=document.querySelector("footer");
        
        if(di.style.backgroundColor=="aliceblue")
    {
        di.style.backgroundColor="#343233"
        di.style.color="black";
        f.style.backgroundColor="white";
    }
    else
    {
        di.style.backgroundColor="aliceblue";
        di.style.color="black";
        f.style.backgroundColor="grey";
    }
}
