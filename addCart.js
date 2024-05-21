const Details = localStorage.getItem('Decription');
const Quan = localStorage.getItem('Quantity');
const pr = localStorage.getItem('Price');
const TP = localStorage.getItem('TPrice');
const color = localStorage.getItem('Color');
const storage = localStorage.getItem('Storage');
const name1 = localStorage.getItem('StyleName');
const stoc = localStorage.getItem('Stock');

document.querySelector(".det1").innerHTML = `<b>${Details}</b>`;
document.querySelector(".det2").innerHTML = `<span style="color:#007600">${stoc}</span>`;
document.querySelector(".det3").innerHTML = `<p style="color:#565959;font-size:12px">${"Eligible for FREE Shipping"}</p>`;
document.querySelector(".det4").innerHTML = `<p style="font-size:12px"><i class="fa-regular fa-square"></i> This will be a gift <a style="color:#007185">Learn more</a></p>`;
document.querySelector(".det5").innerHTML = `<p style="font-size:12px"><b>Colour: </b>${color}</p>`;
document.querySelector(".det6").innerHTML = `<p style="font-size:12px"><b>Size: </b>${storage}</p>`;
document.querySelector(".det7").innerHTML = `<p style="font-size:12px"><b>Style Name: </b>${name1}</p>`;
document.querySelector(".det8").innerHTML = `<p><i class="fa-solid fa-indian-rupee-sign"></i>${pr}</p>`;
document.querySelector(".det9").innerHTML = `<p><b>Shopping Cart</b><p>`;
document.querySelector(".det10").innerHTML = `<p><b> Quantity: ${Quan}  <select>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
</select></p>`;
document.querySelector(".subt").innerHTML = `<p style="text-align:right; font-size:16px"> SubTotal(${Quan} items): <i class="fa-solid fa-indian-rupee-sign"></i><b> ${TP}</b><p>`;
document.querySelector(".subt1").innerHTML = `<p style="color:#0F1111;font-size:18px"> SubTotal(${Quan} items): <i class="fa-solid fa-indian-rupee-sign"></i><b> ${TP}</b><p>`;
