var products = null;
var listings = null;

function LoadProducts() {
  var oFrame = document.getElementById("frmFile");
  var rawProducts = oFrame.contentWindow.document.body.childNodes[0].innerHTML;	
  
  while (rawProducts.indexOf("\n") >= 0) {
    rawProducts = rawProducts.replace("\n", ",");
  }

  products = JSON.parse('['+rawProducts+']');
  console.log("ok", products);
}

function LoadListings() {
  var oFrame = document.getElementById("frmFile");
  var rawListings = oFrame.contentWindow.document.body.childNodes[0].innerHTML;	
  
  while (rawListings.indexOf("\n") >= 0) {
    rawListings = rawListings.replace("\n", ",");
  }

  listings = JSON.parse('['+rawListings+']');
  console.log("ok", listings);
}
