var products = null;

function LoadProducts() {
  var oFrame = document.getElementById("frmFile");
  var rawProducts = oFrame.contentWindow.document.body.childNodes[0].innerHTML;	
  
  while (rawProducts.indexOf("\n") >= 0) {
    rawProducts = rawProducts.replace("\n", ",");
  }

  products = JSON.parse('['+rawProducts+']');
  console.log("ok", products);
}
