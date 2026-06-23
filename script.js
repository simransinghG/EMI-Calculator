function calculate(){


    let amount =
    Number(document.getElementById("amount").value);
    
    
    let rate =
    Number(document.getElementById("rate").value);
    
    
    let year =
    Number(document.getElementById("year").value);
    
    
    
    let monthlyRate =
    rate/12/100;
    
    
    let months =
    year*12;
    
    
    
    let emi =
    (amount * monthlyRate *
    Math.pow(1+monthlyRate,months))
    /
    (Math.pow(1+monthlyRate,months)-1);
    
    
    
    let total =
    emi*months;
    
    
    let interest =
    total-amount;
    
    
    
    document.getElementById("result").innerHTML =
    `
    Monthly EMI: ₹ ${emi.toFixed(2)}
    <br>
    Total Interest: ₹ ${interest.toFixed(2)}
    <br>
    Total Payment: ₹ ${total.toFixed(2)}
    `;
    
    }