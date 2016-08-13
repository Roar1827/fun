var products = null;

function LoadProducts() {
  var oFrame = document.getElementById("frmFile");
  var rawProducts = oFrame.contentWindow.document.body.childNodes[0].innerHTML;	
  
  while (rawProducts.indexOf("\r") >= 0) {
    rawProducts = rawProducts.replace("\r", "").replace("\n", ", ");
  }
  //products = strRawContents.split("\n");
  //products = products.map(JSON.parse);  	

  console.log("ok", rawProducts);
  //products = JSON.parse('['+rawProducts+']');

}
