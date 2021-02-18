document.getElementById('cookieform').onsubmit = async function() {
    var ele = document.getElementsByName('contactMet');
    var contactMetValue;
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            contactMetValue = ele[i].value; 
        }
    }

    ele = document.getElementsByName('cookiePack');
    var cookiePackValue;
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            cookiePackValue = ele[i].value; 
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
        "cookieOrder": {
            "name":document.getElementById('fname').value,
            "contactMethod":contactMetValue,
            "contactInfo":document.getElementById('fcontactInfo').value,
            "pickUpDate": document.getElementById('fpickUpDate').value,
            "dozens": document.getElementById('fdozens').value,
            "packageMethod": cookiePackValue,
            "paymentMethod":  paymentMethodValue,
            "cookieTheme": document.getElementById('fcookieTheme').value,
            "notes":  document.getElementById('fnotes').value,
          }
      }

      // add await
      await fetch('https://birdiebakery.com/api/users/add/cookie', {
        //await fetch('http://localhost:3000/api/users/add/cookie', {
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