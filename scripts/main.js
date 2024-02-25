// const price= document.getElementById("budget").innerText;
// const convertPrice = parseInt(price);

// const cart= document.getElementById("cart").innerText;
// const convertCart = parseInt(cart);

// const left= document.getElementById("left").innerText;
// const convertleft = parseInt(left);




// function getConvertedValue(id){
//     const value = document.getElementById(id).innerText;
//     const convertValue = parseInt(value);
//     console.log(convertValue);

// }

// getConvertedValue("left")

// ei khane button k add kora holo
const allBtn = document.getElementsByClassName("add-btn");
// 1 ta loop die button er vitore sb nie asa
for(const btn of allBtn){
    btn.addEventListener("click", function(event){
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
    //  akhn ei khane buttton er pawa element gula k html er khali jaiga div e rakha
    
    const selectedContainer = document.getElementById("selected-player-container");


   
    



    // cart 6 er beshi kora jabe na
    const firstCartCount=getConvertedValue("cart");
    if(firstCartCount + 1 > 6){
        alert("limited");
        return;
    }
    event.target.setAttribute("disabled",false);
    event.target.parentNode.style.backgroundColor = "gray";




// update budget and cart and left

// update budget
const budget = getConvertedValue("budget");
if(budget > 0){
    document.getElementById("budget").innerText = budget - parseInt(price);
}
else{
    alert("your budget finished")
}

// update cart

const cartCount = getConvertedValue("cart");
document.getElementById("cart").innerText = cartCount + 1; 

// update left
const leftCount = getConvertedValue("left");
document.getElementById("left").innerText = leftCount -1;






    // ei khane 1 ta div create krtte hbe
    const div = document.createElement("div");
    // sb seshe eita shudu lekha gula k pasa pasi rakhar jnno
    div.classList.add("flex");


    const p1=document.createElement("p");
    const p2=document.createElement("p");
    const p3=document.createElement("p");
    // innerText gula k add kore nilm
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = category;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    // div k selected container er o khane nie jabo
    
    selectedContainer.appendChild(div);

    // this part are total cost
   updateTotalCost(price);
   updateGrandTotal();
    
    });
}


// apply cupon
function updateGrandTotal(status){
    const totalCost = getConvertedValue("total-cost");
    if(status == undefined){
        
        document.getElementById("grand-total").innerText = totalCost;

    }
    else{
     const  couponCode = document.getElementById("coupon-code").value;

    if(couponCode == "love420"){
        const discounted = totalCost * .2;
        // console.log(discounted)
        const result =totalCost - discounted;
        document.getElementById("grand-total")
.innerText = result;

    }
    else{
        alert("please enter valid coupon code")
    }

    }
    }

   


// grand total cost

// function updateGrandTotal(){
//     const totalCost = getConvertedValue("total-cost");
//     document.getElementById("grand-total").innerText = totalCost;
// }

// total cost

function updateTotalCost(value){
    
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
}




function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertValue = parseInt(price);
    return convertValue;
}
// const price = getConvertedValue("budget");
// const CartCount = getConvertedValue("cart");
// const LeftCount = getConvertedValue("left");


