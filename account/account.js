document.addEventListener('DOMContentLoaded', function() {
 
  const loginTab = document.getElementById("login-tab");
  const signupTab = document.getElementById("signup-tab");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (loginTab && signupTab && loginForm && signupForm) {
    loginTab.addEventListener("click", () => {
      loginTab.classList.add("active");
      signupTab.classList.remove("active");
      loginForm.classList.add("active");
      signupForm.classList.remove("active");
      setTimeout(ensurePasswordToggles, 100);
    });

    signupTab.addEventListener("click", () => {
      signupTab.classList.add("active");
      loginTab.classList.remove("active");
      signupForm.classList.add("active");
      loginForm.classList.remove("active");
      setTimeout(ensurePasswordToggles, 100);
    });
  }
  
 
  function ensurePasswordToggles() {
    document.querySelectorAll('.password-wrapper input[type="password"]').forEach(input => {
      if (!input.parentElement.querySelector('.toggle-password')) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'toggle-password';
        const eyeIcon = document.createElement('i');
        eyeIcon.className = 'fa-solid fa-eye';
        btn.appendChild(eyeIcon);

        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          if (input.type === 'password') {
            input.type = 'text';
            eyeIcon.className = 'fa-solid fa-eye-slash';
          } else {
            input.type = 'password';
            eyeIcon.className = 'fa-solid fa-eye';
          }
        });

        input.parentElement.appendChild(btn);
      }
    });
  }
  
  setTimeout(ensurePasswordToggles, 200);
  

  const cardNumber = document.getElementById('card-number');
  const expiryDate = document.getElementById('expiry-date');
  const cvv = document.getElementById('cvv');

  if (cardNumber) {
    cardNumber.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 16) value = value.slice(0, 16);
      e.target.value = value;
    });
  }

  if (expiryDate) {
    expiryDate.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      e.target.value = value;
    });
  }

  if (cvv) {
    cvv.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 4) value = value.slice(0, 4);
      e.target.value = value;
    });
  }

  const loginFormEl = document.getElementById('login-form');
  const signupFormEl = document.getElementById('signup-form');

  if (loginFormEl) {
    loginFormEl.addEventListener('submit', function(e) {
      e.preventDefault();
    
      alert('Login functionality will be implemented');
    });
  }

  if (signupFormEl) {
    signupFormEl.addEventListener('submit', function(e) {
      e.preventDefault();
 
      const inputs = signupFormEl.querySelectorAll('input[required]');
      let isValid = true;
   
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ff0000';
          setTimeout(() => {
            input.style.borderColor = '#ccc';
          }, 2000);
        }
      });
      
      if (!isValid) {
        alert('Please fill all required fields!');
        return;
      }
    
      const passwordFields = signupFormEl.querySelectorAll('input[type="password"]');
      const password = passwordFields[0];
      const confirmPassword = passwordFields[1];
     
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        alert('Passwords do not match!');
        password.style.borderColor = '#ff0000';
        confirmPassword.style.borderColor = '#ff0000';
        setTimeout(() => {
          password.style.borderColor = '#ccc';
          confirmPassword.style.borderColor = '#ccc';
        }, 2000);
        return;
      }
     
      const cardNumber = document.getElementById('card-number');
      if (cardNumber && cardNumber.value.length !== 16) {
        alert('Credit card number must be 16 digits!');
        cardNumber.style.borderColor = '#ff0000';
        setTimeout(() => {
          cardNumber.style.borderColor = '#ccc';
        }, 2000);
        return;
      }
   
      const expiryDate = document.getElementById('expiry-date');
      if (expiryDate && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate.value)) {
        alert('Please enter a valid expiry date (MM/YY)!');
        expiryDate.style.borderColor = '#ff0000';
        setTimeout(() => {
          expiryDate.style.borderColor = '#ccc';
        }, 2000);
        return;
      }
    
      const cvv = document.getElementById('cvv');
      if (cvv && (cvv.value.length < 3 || cvv.value.length > 4)) {
        alert('CVV must be 3 or 4 digits!');
        cvv.style.borderColor = '#ff0000';
        setTimeout(() => {
          cvv.style.borderColor = '#ccc';
        }, 2000);
        return;
      }
    
      alert('Account created successfully!');
  
      signupFormEl.reset();
      
      if (loginTab && signupTab && loginForm && signupForm) {
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
      }
    });
  }
});

