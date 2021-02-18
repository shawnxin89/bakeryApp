document.getElementById('cakeform').onsubmit = async function() {
    // alert("submitted");
    var ele = document.getElementsByName('contactMet');
    var contactMetValue;
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            contactMetValue = ele[i].value; 
        }
    }

    ele = document.getElementsByName('cakeSize');
    var cakeSizeValue;
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            cakeSizeValue = ele[i].value; 
        }
    }

    ele = document.getElementsByName('cakeFlavor');
    var cakeFlavorAndFillingValue;
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            cakeFlavorAndFillingValue = ele[i].value; 
        }
    }

    ele = document.getElementsByName('paymentMet');
    var paymentMethodValue;
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            paymentMethodValue = ele[i].value; 
        }
    }
   
    data = {
        "cakeOrder": {
            "name":document.getElementById('fname').value,
            "contactMethod":contactMetValue,
            "contactInfo":document.getElementById('fcontactInfo').value,
            "pickUpDate": document.getElementById('fpickUpDate').value,
            "cakeSize": cakeSizeValue,
            "cakeFlavorAndFilling": cakeFlavorAndFillingValue,
            "paymentMethod":  paymentMethodValue,
            "cakeTheme": document.getElementById('fcakeTheme').value,
            "budget": document.getElementById('fbudget').value,
            "notes":  document.getElementById('fnotes').value,
          }
      }

      // add await
      await fetch('https://birdiebakery.com/api/users/add/cake', {
              method: 'POST', // or 'PUT'
              mode: 'cors',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data),
      }).then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

}