// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    if (nums.length < 3) {
        return undefined
    }
    nums.sort(function(a, b){return b-a});

    let countMax = 0
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i]

        if (i + 1 <= nums.length) {
            if (number > nums[i+1]) {
                countMax++
            }
        }

        if (countMax === 3 || i + 1 >= nums.length) {
            return number
        }
    }
}

// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === 4);
console.log(greater3([1,1,2,5]) === 1);
