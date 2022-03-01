const numbers = [1, 2, 3, 4, 5, 6];

// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

function separateArray(array) {
// ваш код здесь
    let even = [];
    let odd = [];
    let j = 0;
    let k = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2){
            odd[j] = array[i];
            j++;
            // 
        }else{
            even[k] = array[i];
            k++;
        }
    }

    return {
        even : even,
        odd : odd
    }
}
separateArray(numbers);