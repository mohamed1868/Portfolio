let text = document.querySelector(".sayhello .container .text h3 span")
let say = function() {
    setTimeout(() => {
        text.innerHTML = "Front-end       "
    }, 0)
    setTimeout(() => {
        text.innerHTML = "react developer"
    }, 4000)
}
say()
setInterval(say, 8000)

let skills = document.querySelector(".Skills")
let skillspan = document.querySelectorAll(".Skills .container .box1 .row span")

window.onscroll = function() {
    if (window.scrollY >= skills.offsetTop - 260) {
        skillspan.forEach((el) => {
            el.style.width = el.dataset.width
        })
    }
}


let secsionrepo = document.querySelector(".Project .container .repo")

function repo() {
    fetch("https://api.github.com/users/mohamed1868/repos")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            data.forEach((ele) => {
                let div = document.createElement("div")
                div.className = "box"
                div.setAttribute("data-title", `${ele.name}`)
                let h2 = document.createElement("h2")
                h2.appendChild(document.createTextNode(ele.name))
                div.appendChild(h2)
                let div2 = document.createElement("div")
                div2.className = "corepo"
                let a = document.createElement("a")
                a.setAttribute("href", `https://mohamed1868.github.io/${ele.name}/`)
                a.setAttribute("target", "_blank")
                let textvisi = document.createTextNode("Visit")
                a.appendChild(textvisi)
                let p1 = document.createElement("p")
                p1.appendChild(a)
                p1.className = "visit"
                let a1 = document.createElement("a")
                a1.setAttribute("href", `https://github.com/mohamed1868/${ele.name}`)
                a1.setAttribute("target", "_blank")
                let textvisit = document.createTextNode("Repo")
                a1.appendChild(textvisit)
                let p3 = document.createElement("p")
                p3.appendChild(a1)
                p3.className = "visitrepo"

                let p2 = document.createElement("p")
                p2.appendChild(document.createTextNode(`star:${ele.stargazers_count}`))
                p2.className = "star"
                div2.appendChild(p1)
                div2.appendChild(p3)
                div2.appendChild(p2)

                div.appendChild(div2)
                secsionrepo.appendChild(div)
                let search = document.querySelector(".Project .container .search input")
                search.oninput = function() {
                    let input = search.value.toUpperCase()
                    let boxrepo = document.querySelectorAll(".Project .container .repo .box")
                    boxrepo.forEach((el) => {
                        let data = el.dataset.title.toUpperCase()
                        el.style.display = data.includes(input) ? "block" : "none"
                    })
                }
            })
        })
}
repo()