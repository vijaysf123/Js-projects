(function() {
    const msgDiv = document.querySelector(".msg-div");
    const printMsgDiv = document.querySelector("#msg");
    const frm = document.querySelector(".form");
    frm.addEventListener("submit", (e) => {
        e.preventDefault();
        // get the inpt msg box element         
        const message = document.querySelector("#msgbox");
        
        if(message.value != ""){
            const msgHtml = `${message.value}`;
            
            // Clear message box
            message.value = "";

            // print the message         
            printMsgDiv.textContent = msgHtml;
            printMsgDiv.classList.add("msg");
        
            // Focus on that message
            printMsgDiv.focus();

            // message will show only for 10 seconds then auto disappear               
            setTimeout(() => {
                printMsgDiv.textContent = "";
                printMsgDiv.classList.remove("msg");
            }, 5000);
        } else{
            alert("write some message first");
        }
    })
})();
