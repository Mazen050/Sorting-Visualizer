from flask import Flask,request,jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route("/bubble",methods = ["POST"])
def mahmoud():
    array = request.get_json()["array"] # array parameter coming from website
    logs = {}                           # record steps here
    """Logic Here"""

    steps = {}
    steps["steps"] = []
    bubble_sort(array,steps)
    
    return jsonify(steps)                # return steps to website



def bubble_sort(arr,steps):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            steps["steps"].append({"type": "compare", "index":[j, j+1]})
            if arr[j] > arr[j + 1]:
                steps["steps"].append({"type": "swap", "index":[j, j+1]})
                arr[j], arr[j + 1] = arr[j + 1], arr[j]




@app.route("/insertion",methods = ["POST"])
def func1():
    array = request.get_json()["array"] # array parameter coming from website
    logs = {}                           # record steps here
    """Logic Here"""

    steps = insertion_sort_steps(array)
    s = {}
    s["steps"]=steps
    
    return jsonify(s)                # return steps to website


def insertion_sort_steps(arr):
    steps = []
    size = len(arr)

    for i in range(1, size):
        current_element = arr[i]
        j = i - 1

        while j >= 0:
            steps.append({ "type": "compare", "indices": [j, j + 1] })
            if arr[j] > current_element:
                arr[j + 1] = arr[j]
                steps.append({ "type": "swap", "indices": [j, j + 1] })
                j -= 1
            else:
                break

        arr[j + 1] = current_element
    return steps




@app.route("/selection",methods = ["POST"])
def func2():
    array = request.get_json()["array"] 
    """Logic Here"""

    steps = selction_sort(array,len(array))
    
    return jsonify(steps)                # return steps to website


def selction_sort(array, size):
    steps = {"steps": []}

    for i in range(size):
        min_i = i
        steps["steps"].append({"type": "new_min","min_index": min_i,})

        for j in range(i + 1, size):
            steps["steps"].append({"type": "compare", "index":[j,min_i]})

            if array[j] < array[min_i]:
                min_i = j
                steps["steps"].append({"type": "new_min","min_index": min_i,})

        if min_i != i:
            steps["steps"].append({"type": "swap", "index": [i, min_i]})
            array[i], array[min_i] = array[min_i], array[i]

        else:
            steps["steps"].append({"type": "no_swap", "index":i})


    return steps







@app.route("/quick",methods = ["POST"])
def shehab():
    array = request.get_json()["array"] # array parameter coming from website
    logs = {}                           # record steps here
    """Logic Here"""

    array1 = []
    quicksort(array, 0, len(array) - 1,array1,0)

    step = {"steps":array1}

    print(step)
    return jsonify(step)                # return steps to website
    



def record_step(step_type, data, array1, depth):
    step = {'type': step_type, 'index': data}
    if depth is not None:
        step['depth'] = depth
    array1.append(step)

def partition(arr, left, right, array1, depth=0):
    pivot = arr[right]
    pivotindx = right
    i = left
    j = right - 1
    #* arr[left:right+1]
    record_step('split', list(range(left,right+1)), array1, depth )

    while i < j:
        while i < right and arr[i] < pivot:
            record_step('compare', [i, pivotindx], array1, 0)
            i += 1
        while j > left and arr[j] >= pivot:
            record_step('compare', [j, pivotindx], array1, 0)
            j -= 1
        if i < j:
            arr[i], arr[j] = arr[j], arr[i]
            record_step('swap', [i, j], array1, 0)

    if arr[i] > pivot:
        arr[i], arr[right] = arr[right], arr[i]
        record_step('swap', [i, right], array1, 0)

    return i
def quicksort(arr, left, right, array1, depth=0):
    if left < right:
        part = partition(arr, left, right, array1, depth)
        quicksort(arr, left, part - 1, array1, depth + 1 )
        quicksort(arr, part + 1, right, array1, depth + 1)
        record_step('split', list(range(left,right+1)), array1, depth )

# Example usage
arr = [2, 6, 5, 1, 7, 4, 3, 0]




@app.route("/merge",methods = ["POST"])
def mazen():
    array = request.get_json()["array"] # array parameter coming from website
    logs = {}                           # record steps here
    """Logic Here"""

    idx = list(range(len(array)))

    steps = {}
    steps["steps"] = []
    depth = 0

    merge_sort(array,depth,steps,idx)
    
    return jsonify(steps)                # return steps to website






def merge_sort(arr,depth,steps,indx):
    steps["steps"].append({"type":"split","index":indx.copy(),"depth":depth})
    print(arr,depth)
    if len(arr)>1:
        l = arr[:len(arr)//2]
        r = arr[len(arr)//2:]

        idxl = indx[:len(arr)//2]
        idxr = indx[len(arr)//2:]

        
        merge_sort(l,depth+1,steps,idxl)
        merge_sort(r,depth+1,steps,idxr)

        leftIndex = 0
        rightIndex = 0
        mergedIndex = 0
        
        while leftIndex < len(l) and rightIndex<len(r):
            if l[leftIndex]>r[rightIndex]:
                steps["steps"].append({"type":"swap","index":idxr[rightIndex],"depth":depth})
                arr[mergedIndex]=r[rightIndex]
                rightIndex+=1
            else:
                steps["steps"].append({"type":"swap","index":idxl[leftIndex],"depth":depth})
                arr[mergedIndex] = l[leftIndex]
                leftIndex+=1
            mergedIndex+=1
        
        while leftIndex< len(l):
            steps["steps"].append({"type":"swap","index":idxl[leftIndex],"depth":depth})
            arr[mergedIndex] =l[leftIndex]
            leftIndex+=1
            mergedIndex+=1

        while rightIndex< len(r):
            steps["steps"].append({"type":"swap","index":idxr[rightIndex],"depth":depth})
            arr[mergedIndex] =r[rightIndex]
            rightIndex+=1
            mergedIndex+=1
        # print(arr,depth)
        steps["steps"].append({"type":"merge","index":indx.copy(),"depth":depth})