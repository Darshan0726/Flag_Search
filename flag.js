const input = document.querySelector("input");
const btn = document.querySelector("a");


btn.onclick = ((e) => {
    e.preventDefault()
    const flagbox = document.querySelector(".box1");
    flagbox.innerHTML = "";

    fetch("https://flagcdn.com/en/codes.json")
        .then((response) => { return response.json() })
        .then((reject) => {
            console.log(reject);
            showflag(reject)
        })
})

function showflag(reject) {
    const flagname = input.value;
    const flagCapital = flagname.charAt(0).toUpperCase() + flagname.slice(1)
    for (let [key, value] of Object.entries(reject)) {
        if (value === flagCapital) {
            const img = document.createElement("img");
            img.src = "https://flagcdn.com/160x120/" + ([key][0]) + ".png";
            document.querySelector(".box1").append(img);
        }
    }
}