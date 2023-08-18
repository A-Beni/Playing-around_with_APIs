const convertCurrency = async () => {
    const haveCurrency = document.getElementById('haveCurrency').value;
    const wantCurrency = document.getElementById('wantCurrency').value;
    const amount = document.getElementById('amount').value;
  
    const baseUrl = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency';
    const apiKey = '7443eda433mshcc7c54380f7555bp1bce89jsn22261a9e5a75';
    const url = `${baseUrl}?have=${haveCurrency}&want=${wantCurrency}&amount=${amount}`;
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const responseText = await response.json();
      
     const oldAmount = responseText.old_amount;
     const newAmount = responseText.new_amount;
     const newCurrency = responseText.new_currency;

     const resultText = `${oldAmount} ${haveCurrency} is ${newAmount} ${newCurrency}`;
     document.getElementById('result').innerText = resultText;}
     catch (error){
        console.error(error)
     }
    
  };
  
  const convertBtn = document.getElementById('convertBtn');
  convertBtn.addEventListener('click', convertCurrency);
  