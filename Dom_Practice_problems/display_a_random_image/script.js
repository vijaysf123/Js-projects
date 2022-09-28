(function() {
    const imgChangeBtn = document.querySelector("#img-change");
    const images = [`http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg`, `http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg`, "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"];
    let imgCount = 0;
    imgChangeBtn.addEventListener("click", (e) => {
        e.target.previousElementSibling.setAttribute("src", images[imgCount]);
        imgCount = imgCount < 2 ? imgCount + 1 : 0;
    })
})();