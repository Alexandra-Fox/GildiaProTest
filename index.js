'use strict'

var products = [
    {productId:1, productName: 'Товар 1', categoryId:1},
    {productId:2, productName: 'Товар 2', categoryId:2},
    {productId:3, productName: 'Товар 3', categoryId:3},
    {productId:4, productName: 'Товар 4', categoryId:4},
    {productId:5, productName: 'Товар 5', categoryId:5},
    {productId:6, productName: 'Товар 6', categoryId:1},
    {productId:7, productName: 'Товар 7', categoryId:2},
    {productId:8, productName: 'Товар 8', categoryId:3},
    {productId:9, productName: 'Товар 9', categoryId:4},
    {productId:10, productName: 'Товар 10', categoryId:5},
    {productId:11, productName: 'Товар 11', categoryId:1},
    {productId:12, productName: 'Товар 12', categoryId:2},
    {productId:13, productName: 'Товар 13', categoryId:3},
    {productId:14, productName: 'Товар 14', categoryId:4},
    {productId:15, productName: 'Товар 15', categoryId:5},
    {productId:16, productName: 'Товар 16', categoryId:1},
    {productId:17, productName: 'Товар 17', categoryId:2},
    {productId:18, productName: 'Товар 18', categoryId:3},
    {productId:19, productName: 'Товар 19', categoryId:4},
    {productId:20, productName: 'Товар 20', categoryId:5},
    {productId:21, productName: 'Товар 21', categoryId:1},
    {productId:22, productName: 'Товар 22', categoryId:2},
    {productId:23, productName: 'Товар 23', categoryId:3},
    {productId:24, productName: 'Товар 24', categoryId:4},
    {productId:25, productName: 'Товар 25', categoryId:5}
];
var categories = [
    {categoryId:1, categoryName: 'Футболки'},
    {categoryId:2, categoryName: 'Майки'},
    {categoryId:3, categoryName: 'Носки'},
    {categoryId:4, categoryName: 'Джинсы'},
    {categoryId:5, categoryName: 'Брюки'},
];
var div = document.createElement("div");
var tab = document.createElement("div");
var inputBlock = document.createElement("div");

document.body.append(div);
div.appendChild(tab);
div.className = "div";
tab.className = "tabs";
div.appendChild(inputBlock);

categories.forEach(( elem, index ) => {
        var input = document.createElement("input");
        var content = document.createElement("div");

        input.id = "tab" + elem.categoryId;
        input.type = "button";
        input.value = elem.categoryName;
        inputBlock.append(input);

        input.addEventListener("click", () => {
            var noactive = document.querySelectorAll(".active");
            noactive.forEach((el)=>{
                el.classList.remove ("active");
            });
            content.classList.add ("active");
            input.classList.add ("active");
        });

        input.className = "input";
        content.className = "content";

        if (index === 0){
            content.classList.add("active");
            input.classList.add("active");
                }
        content.id = "content" + elem.categoryId;

        div.appendChild(content);
        
        products.forEach(( product ) =>{
            if (product.categoryId === elem.categoryId) {
                var prod = document.createElement("div");
                var img = document.createElement("img");
                var prodName = document.createElement("div");

                img.src = "http://rrstatic.retailrocket.net/test_task/tovar.jpg";
                img.className = "img";
                content.appendChild(prod);
                prod.className = "prod";
                prodName.innerText = product.productName;
                prod.appendChild(img);
                prod.appendChild(prodName);
            };
        });
});