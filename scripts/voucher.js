


const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;
async function getdata()
{
    try
    {
        let res= await fetch(url);
        let products= await res.json();
        // console.log(products[0].vouchers)
        append(products[0].vouchers)
    }
    catch(err)
    {
        console.log(error)
    }
    

}

getdata();

function append(data)
{
    let container=document.getElementById("voucher_list");
    data.forEach(function (elem) {
        // console.log(elem)
        let div=document.createElement("div")
        div.setAttribute("class","voucher")
        let img=document.createElement("img")
        img.src=elem.image;
        img.style.height="70%"
        img.style.width="90%";
        img.style.margin="10px"

        let h3=document.createElement("h3")
        h3.innerText=elem.name;
        h3.style.textAlign="center"

        let h5=document.createElement("h3")
        h5.innerText=elem.price;
        h5.style.textAlign="center"

        let button=document.createElement("button");
        button.innerText="Buy";
        button.style.marginLeft="120px";
        button.setAttribute("id","buy_voucher")
        button.addEventListener("click",function()
        {
            BuyProduct(elem)
        })
        
        div.append(img,h3,h5,button)
        container.append(div)
    });
}


let Details=JSON.parse(localStorage.getItem("user"))


function walet_price()
{
    let walet=document.getElementById("wallet_balance")
   
    let h3=document.createElement("h3")
    h3.innerText=Details.amount;
    h3.style.margin="auto"
   
    walet.append(h3) 
}
walet_price()




purchaseData=JSON.parse(localStorage.getItem("purchase"))|| [];
function BuyProduct(element)
    {
    
     purchaseData.push(element)
   


// console.log(Details.amount)
// console.log(element.price)
// console.log(Details.amount-element.price)
// console.log(purchaseData)

    
    if(Details.amount>=element.price)
    {
     
        alert("Hurray! purchase successful")
    let walet=document.getElementById("wallet_balance")
    walet.innerHTML=null;
    Details.amount=Details.amount-element.price;
    localStorage.setItem("user",JSON.stringify(Details))
    let h3=document.createElement("h3")
    h3.innerText=Details.amount;
    h3.style.margin="auto";
    walet.append(h3);

    localStorage.setItem("purchase",JSON.stringify(purchaseData))
    
    }
    else{
        alert("Sorry! insufficient balance")  
    }
    

        
       

   
  



 }




