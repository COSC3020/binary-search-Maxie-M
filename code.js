//Resource(s): https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470
//code.js 
//Maxie Machado 
//Algorithms: Binary Search 

function binarySearch(list, element)
 {
    let left = 0; 
    let right = list.length - 1; 

    while (left <= right) 
    {
        let middle = Math.floor((left + right) / 2);

        if (list[middle] === element && (middle === 0 || list[middle - 1] !== element))
        {
            return middle;
        }
        else if (list[middle] < element)
        {
            left = middle + 1; 
        }
        else 
        {
            right = middle - 1;
        }
    }
    return -1;
}
