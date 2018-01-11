function CreatePlayer()
{
  var name = document.getElementById('playername').value;
  var health = document.getElementById('playerhealth').value;
  var color = document.getElementById('playercolour').value;
  var weapon = document.getElementById('playerweapon').value;
  var weaponName = "";

if( weapon == 1 ) {
 weaponName = "Crossbow of much hurting"
}
else if( weapon  == 2 ) {
 weaponName =  "Broadsword of so slicing"
}
else {
 weaponName = "Wand of amaze magics"
}

document.getElementById('name').innerHTML = name;
document.getElementById('health').innerHTML = health;
document.getElementById('colour').style.backgroundcolor = color;
document.getElementById('playerweapon').innerHTML = weaponName;
}
