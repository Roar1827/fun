var products = null;
var listings = null;

function LoadProducts() {
  var oFrame = document.getElementById("prodFile");
  var rawProducts = oFrame.contentWindow.document.body.childNodes[0].innerHTML;	
  
  while (rawProducts.indexOf("\n") >= 0) {
    rawProducts = rawProducts.replace("\n", ",");
  }

  products = JSON.parse('['+rawProducts+']');
  console.log("ok", products[0]);
}

function LoadListings() {
  var oFrame = document.getElementById("listFile");
  var rawListings = oFrame.contentWindow.document.body.childNodes[0].innerHTML;	
  
  while (rawListings.indexOf("\n") >= 0) {
    rawListings = rawListings.replace("\n", ",");
  }

  listings = JSON.parse('['+rawListings+']');
  console.log("ok", listings[0]);
}
