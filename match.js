
function LoadProducts() {
  var oFrame = document.getElementById("frmFile");
  var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;	
  console.log("ok", strRawContents);	
}