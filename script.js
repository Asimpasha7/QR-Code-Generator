
function generateQr()
{

	const myImage = document.getElementById("img");
	const myText = document.getElementById("grtext").value;
	const size = document.getElementById("size").value;

	const qrCodeURL = `https://quickchart.io/qr?text=${encodeURIComponent(myText)}`;
	myImage.src = qrCodeURL;
}