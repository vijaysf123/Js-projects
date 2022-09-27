(function(){
  const btn = document.querySelector("button");
  btn.addEventListener("click",(e)=>{
    const link = document.querySelector("#w3r");
    const attrList = ["href","hreflang","rel","target","type"];
    for(attribute of link.attributes){
      if(attrList.includes(attribute.name)){
        console.log(`The value of attr ${attribute.name} is ${attribute.value}`);
      }
    }
  });
  
})();