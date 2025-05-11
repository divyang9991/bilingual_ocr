// Toggle between Login and Signup forms
document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  });
  
  document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  });
  
  // Password Strength Indicator
  const passwordInput = document.getElementById('signup-password');
  const strengthText = document.getElementById('strength-text');
  const strengthIndicator = document.getElementById('strength-indicator');
  
  passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    strengthIndicator.textContent = strength.level;
    strengthIndicator.style.color = strength.color;
  });
  
  function checkPasswordStrength(password) {
    const regex = {
      lower: /[a-z]/,
      upper: /[A-Z]/,
      number: /[0-9]/,
      special: /[^a-zA-Z0-9]/,
    };
  
    let score = 0;
    if (password.length >= 8) score++;
    if (regex.lower.test(password)) score++;
    if (regex.upper.test(password)) score++;
    if (regex.number.test(password)) score++;
    if (regex.special.test(password)) score++;
  
    if (score <= 2) return { level: 'Weak', color: 'red' };
    if (score <= 4) return { level: 'Medium', color: 'orange' };
    return { level: 'Strong', color: 'green' };
  }
  
  // Form Submission
  document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login successful!');
  });
  
  document.getElementById('signup').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    if (strength.level === 'Weak') {
      alert('Please choose a stronger password.');
    } else {
      alert('Signup successful!');
    }
  });