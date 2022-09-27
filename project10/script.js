(function(){
  var form = document.querySelector("#form1");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fname = document.querySelector("#form1 input[name='fname']");
    const lname = document.querySelector("#form1 input[name='lname']");
    console.log(`first name : ${fname.value}`);
    console.log(`last name : ${lname.value}`);
    
  });
})();