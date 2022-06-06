
let buyData=JSON.parse(localStorage.getItem("user")) || [];


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
        let div=document.createElement("div")
        div.setAttribute("class","voucher")
        let img=document.createElement("img")
        img.src=elem.image;
        img.style.height="70%"
        img.style.width="90%";
        img.style.margin="10px"

        let h4=document.createElement("h4")
        h4.innerText=elem.name;
        h4.style.textAlign="center"

        let h5=document.createElement("h4")
        h5.innerText=elem.price;
        h5.style.textAlign="center"

        let button=document.createElement("button");
        button.innerText="Buy";
        button.style.marginLeft="120px";
        button.addEventListener("click",function()
        {
            BuyProduct(elem)
        })
        

        div.append(img,h4,h5,button)
        container.append(div)
    });
}


// let Details=JSON.parse(localStorage.getItem("user"))

// // console.log(Details)

// function walet_price(waletdata)
// {
//     let walet=document.getElementById("wallet_balance")
//    waletdata.forEach(function(elem){
   
//     console.log(elem)
//     let h4=document.createElement("h4")
//     h4.innerText=elem.amount

//     walet.append(h4)

//    })
    
// }
// walet_price(Details)





// function BuyProduct(elem)
// {
//     console.log("clicked?")
//     // buyData.push(elem);
//     localStorage.setItem("purchase",JSON.stringify());
//     alert("added")
// }

