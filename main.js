const menu = document.querySelector('.burger');
const nav = document.querySelector('.navigation');
menu.addEventListener("click",()=>{
    if(nav.classList.contains('hide'))
    {
        nav.classList.remove('hide');
    }
    else{
        nav.classList.add('hide');
    }
});
const product = document.querySelector('.product');
const company = document.querySelector('.company');
const connect = document.querySelector('.connect');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

function pro(){
    company.classList.add('hide');
    connect.classList.add('hide');
    if(product.classList.contains('hide'))
    {product.classList.remove('hide');
    one.style.transform = "rotate(180deg)";
    two.style.transform = "rotate(0deg)";
    three.style.transform = "rotate(0deg)";

    }
    else
    {product.classList.add('hide');
    one.style.transform = "rotate(0deg)";
}

}

function comp(){
     product.classList.add('hide');
    connect.classList.add('hide');
    if(company.classList.contains('hide'))
    {company.classList.remove('hide');
    two.style.transform = "rotate(180deg)";
    one.style.transform = "rotate(0deg)";
    three.style.transform = "rotate(0deg)";

}
    else
    {company.classList.add('hide');
    two.style.transform = "rotate(0deg)";

}
}
function con(){
    company.classList.add('hide');
    product.classList.add('hide');
    if(connect.classList.contains('hide'))
     {connect.classList.remove('hide');
    three.style.transform = "rotate(180deg)";
    one.style.transform = "rotate(0deg)";
    two.style.transform = "rotate(0deg)";

    }
     else
     {connect.classList.add('hide');
     three.style.transform = "rotate(0deg)";
    
    }
}