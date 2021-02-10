// alert("Hello from app.js!");

// Populate country dropdown
populateCountryDropdown("country", country_arr);

// Change the state dropdown list and country code whenever a country is selected
document.getElementById("country").addEventListener("change", function () {
  // Clear state dropdown
  document.getElementById("state").innerHTML = `
    <option value="-1">Select State</option>
  `;
  // Populate state dropdown
  populateStateDropdown("country", "state");

  // Clear country code value
  document.getElementById("country-code").value = "";
  // Get country code value
  getCountryCode("country", "country-code");
});

function populateCountryDropdown(countryElementId, countryArray) {
  // Grab country dropdown DOM
  const countryDropdown = document.getElementById(countryElementId);

  // Populate country dropdown
  countryArray.forEach((country) => {
    countryDropdown.innerHTML += `
      <option value="${country}">${country}</option>
    `;
  });
}

function getCountryCode(countryElementId, countryCodeElementId) {
  // Grab DOMs
  const selectedCountry = document.getElementById(countryElementId).value;
  const countryCodeDisplay = document.getElementById(countryCodeElementId);

  // Get code of selected country
  let countryCodeValue = countryCode.filter((country) => {
    if (country.country === selectedCountry) return country;
  });

  // Render code in country code text field
  countryCodeDisplay.value = countryCodeValue[0].code;
}

function populateStateDropdown(countryElementId, stateElementId) {
  // Get the index selected in Country dropdown
  let selectedCountryIndex = document.getElementById(countryElementId)
    .selectedIndex;

  // Target state dropdown DOM
  let stateDropdown = document.getElementById(stateElementId);

  // Get selected country state
  stateArray = s_a[selectedCountryIndex].split("|");

  // Populate state dropdown
  stateArray.forEach((state) => {
    stateDropdown.innerHTML += `
      <option value="${state}">${state}</option>
    `;
  });
}
