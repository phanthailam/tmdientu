    const btn= document.querySelectorAll("button")
    btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem=event.target
        var product = btnItem.parentElement
        var product2= product.parentElement
        var product3= product2.parentElement
        var product4= product3.parentElement
        var productImg=product4.querySelector("img").src
        console.log(productImg)
        var productName=product3.querySelector("h1").innerText
        var productPrice=product3.querySelector(".gia").innerText
        var productSize=product3.querySelector("#size").value 
        var productSl=product3.querySelector("#carts").value 
    
        
        
        localStorage.setItem('productImg', productImg);
        localStorage.setItem('productName', productName);
        localStorage.setItem('productPrice', productPrice);
        localStorage.setItem('productSize', productSize);
        localStorage.setItem('productSl', productSl);
        addcart(productPrice,productImg,productName)
    }})

    })