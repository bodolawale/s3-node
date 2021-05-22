function viewImage() {
	const key = document.getElementById("imgKey").value;
	const img = document.getElementById("imgValue");
	img.style.display = "block";
	img.style.textAlign = "center";
	img.setAttribute("src", `image/${key}`);
}
