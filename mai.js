import { animate, createSpring } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

var arr = [2, 6, 5, 1, 7, 4, 3, 0]

// const dict ={"steps": [{'type': 'split', 'index': [0, 1, 2, 3, 4, 5, 6, 7], 'depth': 0}, {'type': 'split', 'index': [0, 1, 2, 3], 'depth': 1}, {'type': 'split', 'index': [0, 1], 'depth': 2}, {'type': 'split', 'index': [0], 'depth': 3}, {'type': 'split', 'index': [1], 'depth': 3}, {'type': 'swap', 'index': 0, 'depth': 2}, {'type': 'swap', 'index': 1, 'depth': 2}, {'type': 'merge', 'index': [0, 1], 'depth': 2}, {'type': 'split', 'index': [2, 3], 'depth': 2}, {'type': 'split', 'index': [2], 'depth': 3}, {'type': 'split', 'index': [3], 'depth': 3}, {'type': 'swap', 'index': 3, 'depth': 2}, {'type': 'swap', 'index': 2, 'depth': 2}, {'type': 'merge', 'index': [2, 3], 'depth': 2}, {'type': 'swap', 'index': 2, 'depth': 1}, {'type': 'swap', 'index': 0, 'depth': 1}, {'type': 'swap', 'index': 3, 'depth': 1}, {'type': 'swap', 'index': 1, 'depth': 1}, {'type': 'merge', 'index': [0, 1, 2, 3], 'depth': 1}, {'type': 'split', 'index': [4, 5, 6, 7], 'depth': 1}, {'type': 'split', 'index': [4, 5], 'depth': 2}, {'type': 'split', 'index': [4], 'depth': 3}, {'type': 'split', 'index': [5], 'depth': 3}, {'type': 'swap', 'index': 5, 'depth': 2}, {'type': 'swap', 'index': 4, 'depth': 2}, {'type': 'merge', 'index': [4, 5], 'depth': 2}, {'type': 'split', 'index': [6, 7], 'depth': 2}, {'type': 'split', 'index': [6], 'depth': 3}, {'type': 'split', 'index': [7], 'depth': 3}, {'type': 'swap', 'index': 7, 'depth': 2}, {'type': 'swap', 'index': 6, 'depth': 2}, {'type': 'merge', 'index': [6, 7], 'depth': 2}, {'type': 'swap', 'index': 6, 'depth': 1}, {'type': 'swap', 'index': 7, 'depth': 1}, {'type': 'swap', 'index': 4, 'depth': 1}, {'type': 'swap', 'index': 5, 'depth': 1}, {'type': 'merge', 'index': [4, 5, 6, 7], 'depth': 1}, {'type': 'swap', 'index': 4, 'depth': 0}, {'type': 'swap', 'index': 0, 'depth': 0}, {'type': 'swap', 'index': 1, 'depth': 0}, {'type': 'swap', 'index': 5, 'depth': 0}, {'type': 'swap', 'index': 6, 'depth': 0}, {'type': 'swap', 'index': 2, 'depth': 0}, {'type': 'swap', 'index': 3, 'depth': 0}, {'type': 'swap', 'index': 7, 'depth': 0}, {'type': 'merge', 'index': [0, 1, 2, 3, 4, 5, 6, 7], 'depth': 0}]};

const barheight = 30, durationscale = 10
var dur = 500
var currentSort = "bubble"


const sortbutton = document.querySelector("#sort")
const genbutton = document.querySelector("#gen")
const insbutton = document.querySelector("#ins")
const slider = document.querySelector(".theslider")

const bubbleButton = document.querySelector("#bubble")
const selectionButton = document.querySelector("#selection")
const insertionButton = document.querySelector("#insertion")
const quickButton = document.querySelector("#quick")
const mergeButton = document.querySelector("#merge")


refresh()

function refresh() {
    const buttons = document.querySelectorAll(".type")
    buttons.forEach((e) => {
        e.addEventListener("click", () => {
            let s = currentSort
            currentSort = e.innerHTML.toLowerCase()
            e.innerText = s.charAt(0).toUpperCase() + s.slice(1);
            document.querySelector(".header").innerHTML = `Sorting Visualization: [${currentSort.toUpperCase()} SORT]`
        })
    })
}

// bubbleButton?.addEventListener("click",()=>{
//     // console.log(e)
//     mergeButton.innerText = currentSort.charAt(0).toUpperCase() + currentSort.slice(1);
//     document.querySelector(".header").innerHTML = "Sorting Visualization: [BUBBLE SORT]"
//     currentSort = "bubble"
// })
// selectionButton?.addEventListener("click",()=>{
//     console.log(e)
//     mergeButton.innerText = currentSort.charAt(0).toUpperCase() + currentSort.slice(1);
//     document.querySelector(".header").innerHTML = "Sorting Visualization: [SELECTION SORT]"
//     currentSort = "selection"
// })
// insertionButton?.addEventListener("click",()=>{
//     console.log(e)
//     mergeButton.innerText = currentSort.charAt(0).toUpperCase() + currentSort.slice(1);
//     document.querySelector(".header").innerHTML = "Sorting Visualization: [INSERTION SORT]"
//     currentSort = "insertion"
// })
// quickButton?.addEventListener("click",()=>{
//     console.log(e)
//     mergeButton.innerText = currentSort.charAt(0).toUpperCase() + currentSort.slice(1);
//     document.querySelector(".header").innerHTML = "Sorting Visualization: [QUICK SORT]"
//     currentSort = "quick"
// })
// mergeButton?.addEventListener("click",(e)=>{
//     console.log(e)
//     mergeButton.innerText = currentSort.charAt(0).toUpperCase() + currentSort.slice(1);
//     document.querySelector(".header").innerHTML = "Sorting Visualization: [MERGE SORT]"
//     mergeButton.id = currentSort
//     currentSort = "merge"
// })


slider.addEventListener("input", (e) => {
    console.log(e.target.value)
    const speed = document.querySelector(".speed")
    speed.innerHTML = "Speed: " + e.target.value
    dur = e.target.value * durationscale
})

sortbutton.addEventListener('click', () => {
    fetch(`/api/${currentSort}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ "array": arr }) }).then((r) => r.json()).then(steps => mainSort(currentSort, steps))
    // mergeSort(dict)
    // const el = document.getElementById("0")
    // el.id = 5
})

genbutton.addEventListener('click', () => {
    console.log("h")
    arr = []
    for (var i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 10))
    }
    // Math.floor(Math.random() * 10);
    // arr = [Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)]
    viewArray(arr)
})

insbutton.addEventListener("click", () => {

})

//* creates the array on the website
function viewArray(array) {
    const container = document.querySelector(".container")
    container.innerHTML = ''

    var order = 0;
    array.forEach(i => {
        const bar = document.createElement("div")
        bar.id = order
        bar.className = "bar"
        bar.style.order = order
        order++;

        const number = document.createElement("h1")
        number.innerText = i

        bar.appendChild(number)
        container.appendChild(bar)

        //* animate height
        animate(bar, { height: (barheight * i) + 10 })
    });

}

//* swaps two elements bar1 and bar2 is the number on the bar not the index
async function animateSwap(bar1, bar2, merge) {
    console.log(bar1)
    console.log(bar2)
    console.log("bats")


    bar1 = document.getElementById(bar1)
    bar2 = document.getElementById(bar2)

    await animate(bar1, { backgroundColor: "#dc3545", duration: dur })
    await animate(bar2, { backgroundColor: "#dc3545", duration: dur })

    const rect1 = bar1.getBoundingClientRect();
    const rect2 = bar2.getBoundingClientRect();

    if (bar1 === bar2) {
        const an = await animate(bar1, { x: (rect2.left - rect1.left), duration: dur })
    }
    else {
        // const an = animate(bar1,{x:(rect2.left-rect1.left),duration:500})
        // const an1 = animate(bar2,{x:(rect1.left-rect2.left),duration:500})
        const an = animate(bar1, { x: (rect2.left - rect1.left), ease: createSpring({ stiffness: 700 }), duration: dur })
        const an1 = animate(bar2, { x: (rect1.left - rect2.left), ease: createSpring({ stiffness: 700 }), duration: dur })
        await Promise.all([an, an1])
    }

    console.log(bar1.getBoundingClientRect())


    const Temp = getComputedStyle(bar1).order;
    bar1.style.order = getComputedStyle(bar2).order;
    bar2.style.order = Temp;

    if (!merge) {
        const tempid = bar1.id;
        bar1.id = bar2.id;
        bar2.id = tempid;
    }

    const y1 = new DOMMatrix(getComputedStyle(bar1).transform).f;
    const y2 = new DOMMatrix(getComputedStyle(bar2).transform).f;

    bar1.style.transform = `translateX(0px) translateY(${y1}px)`;
    bar2.style.transform = `translateX(0px) translateY(${y2}px)`;


    animate(bar1, { backgroundColor: "#26D6BB", duration: dur })
    animate(bar2, { backgroundColor: "#26D6BB", duration: dur })


}

//* animates the depth of a specific part of the array
async function animateDepth(array, depth = 0) {
    var bars = []
    array.forEach((e) => {
        bars.push(document.getElementById(e))
    })

    const transforMatrix = getComputedStyle(bars[0]).transform
    const depthY = new DOMMatrix(transforMatrix)
    var olddepth = depthY.f
    console.log(depthY.f)



    if (depth >= 0) {
        var depthAnims = []
        bars.forEach((e) => {
            const a = animate(e, { y: ((100 * depth) - olddepth) + olddepth, duration: dur*2 })
            depthAnims.push(a)
        })
        await Promise.all(depthAnims)
    }

}
//* gets the order of a number in the array in the flexbos container
function getOrder(num) {
    const el = document.getElementById(num)
    const order = getComputedStyle(el).order
    return order;
}

//* gets the element of an order first element for example
function getElem(num) {
    const container = document.querySelectorAll(".bar")
    var found;

    for (const e of container) {
        if (getComputedStyle(e).order == num) {
            found = e;
        }
    }
    return found;
}
//* delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//* reads the dictionary sent to it and animates the sorting algo
async function mergeSort(dict) {
    var depthstart = {}
    for (const e of dict.steps) {
        console.log(e)
        if (e["type"] == "swap") {
            console.log('swap')

            await animateSwap(getElem(depthstart[e.depth]).id, e.index, true)
            animateDepth([e.index], e.depth);
            depthstart[e.depth]++;
            await delay(dur)
        }
        else if (e["type"] == "split") {
            console.log("split")

            depthstart[e["depth"]] = getOrder(e.index[0]);
            animateDepth(e["index"], e["depth"]);
            await delay(dur)
        }
        else if (e["type"] == "merge") {
            console.log("merge")
            depthstart[e["depth"]] = 0;

            console.log(e.index)
            const container = document.querySelectorAll(".bar")
            var found;

            for (const e of container) {
                if (getComputedStyle(e).order != e.id) {
                    e.id = getComputedStyle(e).order;
                }
            }


            animateDepth(e["index"], e["depth"]);
            // const bar1 = document.getElementById(e["index"])
            // const bar1 = document.getElementById(e["index"])
            // d = bar1.id;
            // bar1.id = bar2.id;
            // bar2.id = tempid;
            // await animateSwap(depthstart[e["depth"]],e["index"])
            await delay(1000)
        }
    }
}

async function insersionSort(dict) {
    for (const e of dict.steps) {
        console.log(e)
        if (e["type"] == "swap") {
            console.log('swap')
            await animateSwap(e.indices[0], e.indices[1])
            await delay(500)
        }
        else if (e["type"] == "compare") {
            console.log("split")
            console.log(e["indices"][0])
            const bar1 = document.getElementById(e["indices"][0])
            const bar2 = document.getElementById(e["indices"][1])
            animate(bar1, { backgroundColor: "#dc3545", duration: dur })
            animate(bar2, { backgroundColor: "#dc3545", duration: dur })
            await delay(dur)
            animate(bar1, { backgroundColor: "#26D6BB", duration: dur })
            animate(bar2, { backgroundColor: "#26D6BB", duration: dur })
        }
    }
}

async function quickSort(dict) {
    for (const e of dict.steps) {
        console.log(e)
        if (e["type"] == "swap") {
            console.log('swap')
            await animateSwap(e.index[0], e.index[1])
            await delay(500)
            animateDepth(e.index, e.depth)
        }
        else if (e["type"] == "compare") {
            console.log("split")
            console.log(e.index)
            const bar1 = document.getElementById(e["index"][0])
            const bar2 = document.getElementById(e["index"][1])
            animate(bar1, { backgroundColor: "#dc3545", duration: dur })
            animate(bar2, { backgroundColor: "#dc3545", duration: dur })
            await delay(dur)
            animate(bar1, { backgroundColor: "#26D6BB", duration: dur })
            animate(bar2, { backgroundColor: "#26D6BB", duration: dur })
            animateDepth(e.index, e.depth)
        }
        else if (e["type"] == "split") {
            animateDepth(e.index, e.depth)
        }
    }
}


async function bubbleSort(dict) {
    for (const e of dict.steps) {
        console.log(e)
        if (e["type"] == "swap") {
            console.log('swap')
            await animateSwap(e.index[0], e.index[1])
            await delay(500)
            animateDepth(e.index, e.depth)
        }
        else if (e["type"] == "compare") {
            console.log("split")
            console.log(e["index"][0])
            const bar1 = document.getElementById(e["index"][0])
            const bar2 = document.getElementById(e["index"][1])
            animate(bar1, { backgroundColor: "#dc3545", duration: dur })
            animate(bar2, { backgroundColor: "#dc3545", duration: dur })
            await delay(dur)
            animate(bar1, { backgroundColor: "#26D6BB", duration: dur })
            animate(bar2, { backgroundColor: "#26D6BB", duration: dur })
            animateDepth(e.index, e.depth)
        }
        else if (e["type"] == "split") {
            animateDepth(e.index, e.depth)
        }
    }
}

async function selectionSort(dict) {
    let prevminidx;
    for (const e of dict.steps) {
        console.log(e)
        if (e["type"] === "swap") {
            console.log('swap')
            console.log(e.index)
            await animateSwap(e.index[0], e.index[1])
            await delay(dur)
            animateDepth(e.index, e.depth)
        }
        else if (e["type"] === "compare") {
            console.log("split")
            console.log(e["index"][0])
            const bar1 = document.getElementById(e["index"][0])
            const bar2 = document.getElementById(e["index"][1])
            animate(bar1, { backgroundColor: "#dc3545", duration: dur })
            animate(bar2, { backgroundColor: "#dc3545", duration: dur })
            await delay(dur)
            animate(bar1, { backgroundColor: "#26D6BB", duration: dur })
            animate(bar2, { backgroundColor: "#26D6BB", duration: dur })
            animateDepth(e.index, e.depth)
        }
        else if (e["type"] == "new_min") {
            console.log(prevminidx)
            const bar1 = document.getElementById(e["min_index"])
            await animate(bar1, { backgroundColor: "#008000", duration: 350 })
            await animate(prevminidx, { backgroundColor: "#26D6BB", duration: dur })
            prevminidx = bar1
        }
    }
    await animate(prevminidx, { backgroundColor: "#26D6BB", duration: dur })
}

function mainSort(sortName, steps) {
    if (sortName === "bubble") {
        bubbleSort(steps)
    }
    else if (sortName === "selection") {
        selectionSort(steps)
    }
    else if (sortName === "insertion") {
        insersionSort(steps)
    }
    else if (sortName === "quick") {
        quickSort(steps)
    }
    else if (sortName === "merge") {
        mergeSort(steps)
    }
}

viewArray(arr)

// window.animate = animateDepth;
document.getElementById("compare").addEventListener("click", () => {
    window.location.href = "bonus.html";
});

document.getElementById("ins").addEventListener("click", () => {
    document.getElementById("popup").style.display = "block";
    document.getElementById("opacity").style.display = "block";
    document.body.style.overflow = "hidden"
});

document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
    document.getElementById("opacity").style.display = "none";
    document.body.style.overflow = "auto"
});

document.getElementById("InsertArray").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
    document.getElementById("opacity").style.display = "none";
    document.body.style.overflow = "auto"
});
