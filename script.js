function showCarDetails(name, price, image) {
    document.getElementById('car-name').innerText = name;
    document.getElementById('car-price').innerText = price;
    document.getElementById('car-image').src = image;
    document.getElementById('car-details').style.display = 'block';
    document.getElementById('car').value = name;
    document.getElementById('price').value = price;
}

function closeCarDetails() {
    document.getElementById('car-details').style.display = 'none';
}

function openBookingForm() {
    document.getElementById('booking-form').style.display = 'block';
}

function closeBookingForm() {
    document.getElementById('booking-form').style.display = 'none';
}

document.getElementById('form').onsubmit = function(event) {
    event.preventDefault();
    alert('Pemesanan berhasil! Terima kasih, ' + document.getElementById('name').value);
    closeBookingForm();
    document.getElementById('form').reset();
};