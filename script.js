var cart = []
console.log(cart);

function addItems() {
    if (item.value !== '') {
        cart.push(item.value)
        console.log(cart);

        displayCart()
        document.getElementById('item').value = ''

    } else {
        console.error("it is empty o");
    }

}


function addBegin() {
    if (item.value !== '') {
        cart.unshift(item.value)
        console.log(cart);

        displayCart()
        document.getElementById('item').value = ''

    } else {
        console.error("it is empty o");
    }
}

function deleteAny() {
    
}



function displayCart() {
    show.innerHTML = ''
    for (i = 0; i < cart.length; i++) {
        show.innerHTML +=
            `
<p>${i + 1}. ${cart[i]} </p>

`
    }
}

