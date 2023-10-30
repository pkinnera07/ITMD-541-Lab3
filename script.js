document.addEventListener("DOMContentLoaded", function() {
  const billTotalInput = document.getElementById("billTotal");
  const tipPercentageInput = document.getElementById("tipPercentage");
  const tipRangeInput = document.getElementById("tipRange");
  const tipAmountInput = document.getElementById("tipAmount");
  const totalWithTipInput = document.getElementById("totalWithTip");

  billTotalInput.addEventListener("input", updateTip);
  tipRangeInput.addEventListener("input", updateTip);

  function updateTip() {
      const billTotal = parseFloat(billTotalInput.value);
      const tipPercentage = parseFloat(tipRangeInput.value);

      if (!isNaN(billTotal) && !isNaN(tipPercentage)) {
          const tipAmount = (billTotal * tipPercentage) / 100;
          const totalWithTip = billTotal + tipAmount;
          tipPercentageInput.value = tipPercentage + "%";
          tipAmountInput.value = tipAmount.toFixed(2);
          totalWithTipInput.value = totalWithTip.toFixed(2);
      } else {
          // Handle the invalid input number
          tipPercentageInput.value = "";
          tipAmountInput.value = "";
          totalWithTipInput.value = "";
          alert("Please enter a valid bill total.");
          billTotalInput.value="";
        }
  }
});
