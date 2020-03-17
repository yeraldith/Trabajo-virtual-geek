function operacion() {
    const HOURS_YEAR = 8760;
    var age = document.getElementById('txt').value;
    var HoursAge = (age * HOURS_YEAR);
    document.getElementById('text').innerHTML = HoursAge;
}