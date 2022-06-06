function submit()
{
    
    let data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        address:document.getElementById("address").value,
        amount:document.getElementById("amount").value,
    }
    localStorage.setItem("user",JSON.stringify(data));
    window.location.reload();
}