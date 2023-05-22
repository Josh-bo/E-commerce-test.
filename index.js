// const CAP = () => {
//     window.location = "create.html"
// } 

// let allproductsdetails = []

// const sub = () => {
    
//     let allproducts = {
//         productName: pname.value,
//         productprice: pprice.value,
//         productimage: pimage.value
//     }

//     allproductsdetails.push(allproducts)
//     console.log(allproductsdetails)

//     localStorage.setItem('allproductsdetails', JSON.stringify(allproductsdetails));
// }

// const display = () => {
//    let getback = JSON.parse(localStorage.getItem("allproductsdetails",(allproductsdetails)))
//     console.log(getback);


//     getback.map((item,i) => {
//         console.log(item.productName);

//         display.innerHTML = `
//         <div class="card" style="width: 18rem;">
//         <img src="${item.productimage}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title"></h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//         `
//     })
// }