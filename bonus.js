import { animate, createSpring } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

var arr = [2, 6, 5, 1, 7, 4, 3, 0]
// var arr_2 = [2, 6, 5, 1, 7, 4, 3, 0]

// const dict = {'steps': [{'type': 'new_min', 'min_index': 0}, {'type': 'compare', 'index': [1, 0]}, {'type': 'compare', 'index': [2, 0]}, {'type': 'compare', 'index': [3, 0]}, {'type': 'new_min', 'min_index': 3}, {'type': 'compare', 'index': [4, 3]}, {'type': 'compare', 'index': [5, 3]}, {'type': 'compare', 'index': [6, 3]}, {'type': 'compare', 'index': [7, 3]}, {'type': 'new_min', 'min_index': 7}, {'type': 'swap', 'index': [0, 7]}, {'type': 'new_min', 'min_index': 1}, {'type': 'compare', 'index': [2, 1]}, {'type': 'new_min', 'min_index': 2}, {'type': 'compare', 'index': [3, 2]}, {'type': 'new_min', 'min_index': 3}, {'type': 'compare', 'index': [4, 3]}, {'type': 'compare', 'index': [5, 3]}, {'type': 'compare', 'index': [6, 3]}, {'type': 'compare', 'index': [7, 3]}, {'type': 'swap', 'index': [1, 3]}, {'type': 'new_min', 'min_index': 2}, {'type': 'compare', 'index': [3, 2]}, {'type': 'compare', 'index': [4, 2]}, {'type': 'compare', 'index': [5, 2]}, {'type': 'new_min', 'min_index': 5}, {'type': 'compare', 'index': [6, 5]}, {'type': 'new_min', 'min_index': 6}, {'type': 'compare', 'index': [7, 6]}, {'type': 'new_min', 'min_index': 7}, {'type': 'swap', 'index': [2, 7]}, {'type': 'new_min', 'min_index': 3}, {'type': 'compare', 'index': [4, 3]}, {'type': 'compare', 'index': [5, 3]}, {'type': 'new_min', 'min_index': 5}, {'type': 'compare', 'index': [6, 5]}, {'type': 'new_min', 'min_index': 6}, {'type': 'compare', 'index': [7, 6]}, {'type': 'swap', 'index': [3, 6]}, {'type': 'new_min', 'min_index': 4}, {'type': 'compare', 'index': [5, 4]}, {'type': 'new_min', 'min_index': 5}, {'type': 'compare', 'index': [6, 5]}, {'type': 'compare', 'index': [7, 5]}, {'type': 'swap', 'index': [4, 5]}, {'type': 'new_min', 'min_index': 5}, {'type': 'compare', 'index': [6, 5]}, {'type': 'new_min', 'min_index': 6}, {'type': 'compare', 'index': [7, 6]}, {'type': 'new_min', 'min_index': 7}, {'type': 'swap', 'index': [5, 7]}, {'type': 'new_min', 'min_index': 6}, {'type': 'compare', 'index': [7, 6]}, {'type': 'no_swap', 'index': 6}, {'type': 'new_min', 'min_index': 7}, {'type': 'no_swap', 'index': 7}]}

// const dict_2 = { "steps": [{ 'type': 'split', 'index': [0, 1, 2, 3, 4, 5, 6, 7], 'depth': 0 }, { 'type': 'split', 'index': [0, 1, 2, 3], 'depth': 1 }, { 'type': 'split', 'index': [0, 1], 'depth': 2 }, { 'type': 'split', 'index': [0], 'depth': 3 }, { 'type': 'split', 'index': [1], 'depth': 3 }, { 'type': 'swap', 'index': 0, 'depth': 2 }, { 'type': 'swap', 'index': 1, 'depth': 2 }, { 'type': 'merge', 'index': [0, 1], 'depth': 2 }, { 'type': 'split', 'index': [2, 3], 'depth': 2 }, { 'type': 'split', 'index': [2], 'depth': 3 }, { 'type': 'split', 'index': [3], 'depth': 3 }, { 'type': 'swap', 'index': 3, 'depth': 2 }, { 'type': 'swap', 'index': 2, 'depth': 2 }, { 'type': 'merge', 'index': [2, 3], 'depth': 2 }, { 'type': 'swap', 'index': 2, 'depth': 1 }, { 'type': 'swap', 'index': 0, 'depth': 1 }, { 'type': 'swap', 'index': 3, 'depth': 1 }, { 'type': 'swap', 'index': 1, 'depth': 1 }, { 'type': 'merge', 'index': [0, 1, 2, 3], 'depth': 1 }, { 'type': 'split', 'index': [4, 5, 6, 7], 'depth': 1 }, { 'type': 'split', 'index': [4, 5], 'depth': 2 }, { 'type': 'split', 'index': [4], 'depth': 3 }, { 'type': 'split', 'index': [5], 'depth': 3 }, { 'type': 'swap', 'index': 5, 'depth': 2 }, { 'type': 'swap', 'index': 4, 'depth': 2 }, { 'type': 'merge', 'index': [4, 5], 'depth': 2 }, { 'type': 'split', 'index': [6, 7], 'depth': 2 }, { 'type': 'split', 'index': [6], 'depth': 3 }, { 'type': 'split', 'index': [7], 'depth': 3 }, { 'type': 'swap', 'index': 7, 'depth': 2 }, { 'type': 'swap', 'index': 6, 'depth': 2 }, { 'type': 'merge', 'index': [6, 7], 'depth': 2 }, { 'type': 'swap', 'index': 6, 'depth': 1 }, { 'type': 'swap', 'index': 7, 'depth': 1 }, { 'type': 'swap', 'index': 4, 'depth': 1 }, { 'type': 'swap', 'index': 5, 'depth': 1 }, { 'type': 'merge', 'index': [4, 5, 6, 7], 'depth': 1 }, { 'type': 'swap', 'index': 4, 'depth': 0 }, { 'type': 'swap', 'index': 0, 'depth': 0 }, { 'type': 'swap', 'index': 1, 'depth': 0 }, { 'type': 'swap', 'index': 5, 'depth': 0 }, { 'type': 'swap', 'index': 6, 'depth': 0 }, { 'type': 'swap', 'index': 2, 'depth': 0 }, { 'type': 'swap', 'index': 3, 'depth': 0 }, { 'type': 'swap', 'index': 7, 'depth': 0 }, { 'type': 'merge', 'index': [0, 1, 2, 3, 4, 5, 6, 7], 'depth': 0 }] };


const barheight = 30

var dur = 500

const sortbutton = document.querySelector("#sort")
const genbutton = document.querySelector("#gen")
const insbutton = document.querySelector("#ins")



sortbutton.addEventListener('click', () => {
    // fetch("http://127.0.0.1:5000/merge",{method : "POST", headers: { "Content-Type": "application/json" }, body:JSON.stringify({"array":arr})}).then((r)=>r.json()).then(text => mergeSort(text))
    
    const checkboxs = document.querySelectorAll(".algo-checkbox")

    checkboxs.forEach((e)=>{
        if(e.checked){
            const frame = document.querySelector(`#${e.value}-container`)
            console.log(frame)
            fetch(`http://127.0.0.1:5000/api/${e.value}`,{method : "POST", headers: { "Content-Type": "application/json" }, body:JSON.stringify({"array":arr})}).then((r)=>r.json()).then(text => mainSort(e.value,text,frame))
        }
    })

    // const frameg = document.querySelector("#merge-container")
    
    // selectionSort(dict,frame);
    // mergeSort(dict_2,frameg);
    // console.log(frame?.querySelector('[id="0"]'))
    // console.log(frameg?.querySelector('[id="0"]'))

})

// sortbutton.addEventListener('click', () => {
//     const frame = document.querySelector("#selection-container")
//     const frameg = document.querySelector("#merge-container")
//     const selectedAlgos = Array.from(document.querySelectorAll('.algo-checkbox'))
//         .filter(cb => cb.checked)
//         .map(cb => cb.value);

//     if (selectedAlgos.includes("selection")) {
//         selectionSort(dict,frame);
//     }
//     if (selectedAlgos.includes("merge")) {
//         mergeSort(dict_2,frameg);
//     }
// });


genbutton.addEventListener('click', () => {
    console.log("h")
    Math.floor(Math.random() * 10);
    arr = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    
    // checkboxes
    const checkboxs = document.querySelectorAll(".algo-checkbox")

    checkboxs.forEach((e)=>{
        if(e.checked){
            const frame = document.querySelector(`#${e.value}-container`)
            console.log(frame)
            viewArray(arr,`#${e.value}-container`)
        }
    })

    // viewArray(arr_2,"#selection-container")
    // viewArray(arr_2,"#merge-container")
})


//* creates the array on the website
function viewArray(array, containere) {
    const container = document.querySelector(containere)
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
        animate(bar, { height: (barheight * i) + 25 })
    });

}

//* swaps two elements bar1 and bar2 is the number on the bar not the index
async function animateSwap(bar1,bar2,merge,document){
        console.log(bar1)
        console.log(bar2)
        console.log("bats")


        // bar1 = document.getElementById(bar1)
        // bar2 = document.getElementById(bar2)

        bar1 = document.querySelector(`[id="${bar1}"]`)
        bar2 = document.querySelector(`[id="${bar2}"]`)

        await animate(bar1,{backgroundColor:"#dc3545",duration:dur})
        await animate(bar2,{backgroundColor:"#dc3545",duration:dur})
        
        const rect1 = bar1.getBoundingClientRect();
        const rect2 = bar2.getBoundingClientRect();
        
        if(bar1===bar2){
            const an = await animate(bar1,{x:(rect2.left-rect1.left),duration:dur})
        }
        else{
            // const an = animate(bar1,{x:(rect2.left-rect1.left),duration:500})
            // const an1 = animate(bar2,{x:(rect1.left-rect2.left),duration:500})
            const an = animate(bar1,{x:(rect2.left-rect1.left),ease:createSpring({ stiffness: 700 }),duration:dur})
            const an1 = animate(bar2,{x:(rect1.left-rect2.left),ease:createSpring({ stiffness: 700 }),duration:dur})
            await Promise.all([an,an1])
        }
        
        console.log(bar1.getBoundingClientRect())
    
        
        const Temp = getComputedStyle(bar1).order;
        bar1.style.order = getComputedStyle(bar2).order;
        bar2.style.order = Temp;

        if(!merge){
            const tempid = bar1.id;
            bar1.id = bar2.id;
            bar2.id = tempid;
        }

        const y1 = new DOMMatrix(getComputedStyle(bar1).transform).f;
        const y2 = new DOMMatrix(getComputedStyle(bar2).transform).f;

        bar1.style.transform = `translateX(0px) translateY(${y1}px)`;
        bar2.style.transform = `translateX(0px) translateY(${y2}px)`;

        
        animate(bar1,{backgroundColor:"#26D6BB",duration:dur})
        animate(bar2,{backgroundColor:"#26D6BB",duration:dur})
        

}

//* animates the depth of a specific part of the array
async function animateDepth(array, depth = 0,document) {
    var bars = []
    array.forEach((e) => {
        bars.push(document.querySelector(`[id="${e}"]`))
    })

    const transforMatrix = getComputedStyle(bars[0]).transform
    const depthY = new DOMMatrix(transforMatrix)
    var olddepth = depthY.f
    console.log(depthY.f)



    if (depth >= 0) {
        var depthAnims = []
        bars.forEach((e) => {
            const a = animate(e, { y: ((100 * depth) - olddepth) + olddepth, duration: 1000 })
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
function getElem(num,document) {
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


async function bubbleSort(dict,document) {
    for (const e of dict.steps) {
        console.log(e)
        if (e["type"] == "swap") {
            console.log('swap')
            await animateSwap(e.index[0], e.index[1],false,document)
            await delay(dur)
            // animateDepth(e.index, e.depth)
        }
        else if (e["type"] == "compare") {
            console.log("split")
            console.log(e["index"][0])
            const bar1 = document.querySelector(`[id="${e["index"][0]}"]`)
            const bar2 = document.querySelector(`[id="${e["index"][1]}"]`)
            animate(bar1, { backgroundColor: "#dc3545", duration: dur })
            animate(bar2, { backgroundColor: "#dc3545", duration: dur })
            await delay(dur)
            animate(bar1, { backgroundColor: "#26D6BB", duration: dur })
            animate(bar2, { backgroundColor: "#26D6BB", duration: dur })
            // animateDepth(e.index, e.depth)
        }
    }
}


async function insersionSort(dict,document) {
    for (const e of dict.steps) {
        console.log(e)
        if (e["type"] == "swap") {
            console.log('swap')
            await animateSwap(e.indices[0], e.indices[1],false,document)
            await delay(dur)
        }
        else if (e["type"] == "compare") {
            console.log("split")
            console.log(e["indices"][0])
            const bar1 = document.querySelector(`[id="${e["indices"][0]}"]`)
            const bar2 = document.querySelector(`[id="${e["indices"][1]}"]`)
            animate(bar1, { backgroundColor: "#dc3545", duration: dur })
            animate(bar2, { backgroundColor: "#dc3545", duration: dur })
            await delay(dur)
            animate(bar1, { backgroundColor: "#26D6BB", duration: dur })
            animate(bar2, { backgroundColor: "#26D6BB", duration: dur })
        }
    }
}

async function quickSort(dict,document) {
    for (const e of dict.steps) {
        console.log(e)
        if (e["type"] == "swap") {
            console.log('swap')
            await animateSwap(e.index[0], e.index[1],false,document)
            await delay(dur)
            animateDepth(e.index, e.depth)
        }
        else if (e["type"] == "compare") {
            console.log("split")
            console.log(e.index)
            const bar1 = document.querySelector(`[id="${e["index"][0]}"]`)
            const bar2 = document.querySelector(`[id="${e["index"][1]}"]`)
            animate(bar1, { backgroundColor: "#dc3545", duration: dur })
            animate(bar2, { backgroundColor: "#dc3545", duration: dur })
            await delay(dur)
            animate(bar1, { backgroundColor: "#26D6BB", duration: dur })
            animate(bar2, { backgroundColor: "#26D6BB", duration: dur })
            animateDepth(e.index, e.depth,document)
        }
        else if (e["type"] == "split") {
            animateDepth(e.index, e.depth,document)
        }
    }
}

//* reads the dictionary sent to it and animates the sorting algo
async function selectionSort(dict,document){
    let prevminidx;
    for(const e of dict.steps){
        console.log(e)
        if(e["type"] === "swap"){
            console.log('swap')
            console.log(e.index)
            await animateSwap(e.index[0],e.index[1],false,document)
            await delay(dur)
            animateDepth(e.index,e.depth,document)
        }
        else if(e["type"] === "compare"){
            console.log("split")
            console.log(e["index"][0])
            const bar1 = document.querySelector(`[id="${e["index"][0]}"]`)
            const bar2 = document.querySelector(`[id="${e["index"][1]}"]`)
            animate(bar1,{backgroundColor:"#dc3545",duration:dur})
            animate(bar2,{backgroundColor:"#dc3545",duration:dur})
            await delay(dur)
            animate(bar1,{backgroundColor:"#26D6BB",duration:dur})
            animate(bar2,{backgroundColor:"#26D6BB",duration:dur})
            animateDepth(e.index,e.depth,document)
        }
        else if(e["type"] == "new_min"){
            console.log(prevminidx)
            const bar1 = document.querySelector(`[id="${e["min_index"]}"]`)
            await animate(bar1,{backgroundColor:"#008000",duration:350})
            await animate(prevminidx,{backgroundColor:"#26D6BB",duration:dur})
            prevminidx = bar1
        }
    }
    await animate(prevminidx,{backgroundColor:"#26D6BB",duration:dur})
}

async function mergeSort(dict,document){
    var depthstart = {}
    for(const e of dict.steps){
        console.log(e)
        if(e["type"] == "swap"){
            console.log('swap')

            await animateSwap(getElem(depthstart[e.depth],document).id,e.index,true,document)
            animateDepth([e.index],e.depth,document);
            depthstart[e.depth]++;
            await delay(dur)
        }
        else if(e["type"] == "split"){
            console.log("split")

            depthstart[e["depth"]] = getOrder(e.index[0]); 
            animateDepth(e["index"],e["depth"],document);
            await delay(dur)
        }
        else if(e["type"] == "merge"){
            console.log("merge")
            depthstart[e["depth"]]=0;

            console.log(e.index)
            const container = document.querySelectorAll(".bar")
            var found;

            for(const e of container){
                if(getComputedStyle(e).order != e.id){
                    e.id=getComputedStyle(e).order;
                }
            }
            
            
            animateDepth(e["index"],e["depth"],document);
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
// viewArray(arr)
// viewArray(arr_2)

//gdeda

document.querySelectorAll('.algo-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const value = checkbox.value;
        const frameId = `${value}-frame`;

        let frame = document.getElementById(frameId);

        if (checkbox.checked) {
            if (!frame) {
                frame = document.createElement('div');
                frame.classList.add('frame');
                frame.id = frameId;

                const topLeft = document.createElement('div');
                topLeft.classList.add('corner', 'top-left');
                topLeft.textContent = value.charAt(0).toUpperCase() + value.slice(1) + " Sort";

                const topRight = document.createElement('div');
                topRight.classList.add('corner', 'top-right');
                topRight.textContent = "Time: 0ms";

                const bottomLeft = document.createElement('div');
                bottomLeft.classList.add('corner', 'bottom-left');
                bottomLeft.textContent = "Compares: 0";

                const bottomRight = document.createElement('div');
                bottomRight.classList.add('corner', 'bottom-right');
                bottomRight.textContent = "Swaps: 0";

                const container = document.createElement('div');
                container.classList.add('container');
                container.id = `${value}-container`;

                frame.appendChild(topLeft);
                frame.appendChild(topRight);
                frame.appendChild(bottomLeft);
                frame.appendChild(bottomRight);
                frame.appendChild(container);

                document.querySelector('.frames-wrapper').appendChild(frame);
            }

            frame.style.display = "block";
        } else {
            if (frame) {
                frame.remove();
            }
        }
    });
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


document.getElementById("InsertArray").addEventListener("click", () => {
    const input = document.getElementById("inputArray").value.trim();
    const array = input.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
    console.log(array)
    if (array.length === 0) {
        alert("Please enter a valid array.");
        return;
    }
    else{
        const checkboxs = document.querySelectorAll(".algo-checkbox")

        checkboxs.forEach((e)=>{
            if(e.checked){
                const frame = document.querySelector(`#${e.value}-container`)
                console.log(frame)
                viewArray(array,`#${e.value}-container`)
            }
        })
    }

    // document.getElementById("popup").style.display = "none";
});


function mainSort(sortName, steps,container) {
    if (sortName === "bubble") {
        bubbleSort(steps,container)
    }
    else if (sortName === "selection") {
        selectionSort(steps,container)
    }
    else if (sortName === "insertion") {
        insersionSort(steps,container)
    }
    else if (sortName === "quick") {
        quickSort(steps,container)
    }
    else if (sortName === "merge") {
        mergeSort(steps,container)
    }
}
