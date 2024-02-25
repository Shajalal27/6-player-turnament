
// const price = document.getElementById("budget").innerText;
// const convertPrice = parseInt(price);

// const cart = document.getElementById("cart").innerText;
// const convertCart = parseInt(cart);

// const left = document.getElementById("left").innerText;
// const convertLeft = parseInt(left);

const allBtn = document.getElementsByClassName("add-btn");
for(btn of allBtn){
    btn.addEventListener('click', function(event){
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
    // console.log(name, price, category);

    const selectedContainer = document.getElementById("selected-players-container");

    event.target.setAttribute("disabled", false)

    const firstCardCount = getConvertedValue('cart');
    if(firstCardCount + 1 > 6){
       alert('Limit course card');
       return;
    }

    const firstLeftCount = getConvertedValue('left');
    if(firstLeftCount -1 < 0){
       return;
    }

    event.target.parentNode.style.backgroundColor = "gray";


    //Update budget
    const budget = getConvertedValue('budget');
    document.getElementById('budget').innerText = budget - parseInt(price);

    const cartCount = getConvertedValue('cart');
    document.getElementById('cart').innerText = cartCount + 1;
     
    const leftCount = getConvertedValue('left');
    document.getElementById('left').innerText = leftCount - 1;



    const div = document.createElement("div");
    div.classList.add("selected-players");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = category;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    selectedContainer.appendChild(div);
    updateTotalCost(price);

    updateGrandTotal();

    })
}


function updateGrandTotal(status){
    const totalCost = getConvertedValue("total-cost");
    if(status == undefined){
        document.getElementById('grand-total').innerText = totalCost;
    }
    else{
        // const couponElement = document.getElementById('coupon-code').value;
        // const couponCode = couponElement.split(" ").join("").toUpperCase();
        
       const couponCode = document.getElementById('coupon-code').value;
       if(couponCode === "Cricket24"){
            const discounted = totalCost * 0.2;
            document.getElementById('grand-total').innerText = totalCost - discounted;
       }
       else{
            alert('Please enter valid coupon code');
       }
    }
    
}


function updateTotalCost(price){
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(price);
    document.getElementById("total-cost").innerText = sum;
}

// const price = getConvertedValue("budget");
// const cartCount = getConvertedValue("cart");
// const leftCount = getConvertedValue("left");

function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}