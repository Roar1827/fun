var products = null;

function LoadProducts() {
  var oFrame = document.getElementById("frmFile");
  var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;	
  
  while (strRawContents.indexOf("\r") >= 0) {
    strRawContents = strRawContents.replace("\r", "");
  }
  products = strRawContents.split("\n");
  //products = products.map(JSON.parse);  	

  console.log("ok", JSON.parse(products[0]));
}
