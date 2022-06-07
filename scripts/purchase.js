
let bought=JSON.parse(localStorage.getItem("purchase"));


function getdata(data)
{
    let container=document.getElementById("purchased_vouchers")
    data.forEach(element => {
        console.log(element)

        let div=document.createElement("div")
        div.setAttribute("class","voucher")

        let img=document.createElement("img")
        img.src=element.image;
        img.style.height="70%"
        img.style.width="90%";
        img.style.margin="10px"

        let h4=document.createElement("h4")
        h4.innerText=element.name;
        h4.style.textAlign="center"

        let h5=document.createElement("h4")
        h5.innerText=element.price;
        h5.style.textAlign="center";

        div.append(img,h4,h5)

        container.append(div)

    });
}

getdata(bought)


let Details=JSON.parse(localStorage.getItem("user"))
console.log(Details)

function walet_price()
{
    let walet=document.getElementById("wallet_balance")
   
    let h3=document.createElement("h3")
    h3.innerText=Details.amount;
    h3.style.margin="auto"
   
    walet.append(h3) 
}
walet_price()

