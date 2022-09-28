(function() {
    const msgDiv = document.querySelector(".msg-div");
    const printMsgDiv = document.querySelector("#msg");
    const frm = document.querySelector(".form");
    frm.addEventListener("click", (e) => {
        e.preventDefault();
        // get the inpt msg box element         
        const message = document.querySelector("#msgbox");
        const msgHtml = `${message.value}`;

        // print the message         
        printMsgDiv.textContent = msgHtml;
        printMsgDiv.classList.add("msg");

        // message will show only for 10 seconds then auto disappear               
        setTimeout(() => {
            printMsgDiv.textContent = "";
            printMsgDiv.classList.remove("msg");
        }, 5000);
    })
})();