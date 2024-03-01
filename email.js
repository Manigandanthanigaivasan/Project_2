const form = document.querySelector("#form");
    const names = document.querySelector("#names");
    const email = document.querySelector("#email");

    form.addEventListener("submit", (e) => {
      validateInputs();
      
      function validateInputs() {
        const nameVal = names.value.trim();
        const emailVal = email.value.trim();
        var validateEmail = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,})$/
  
        if (nameVal === "") {
          e.preventDefault();
          setError(names, "Name is required");
        } else {
          setSuccess(names);
        }
  
        if (emailVal === "") {
          e.preventDefault();
          setError(email, "Email is required");
        } else if (!emailVal.match(validateEmail)) {
          e.preventDefault();
          setError(email, "Please enter a valid email");
        } else {
          setSuccess(email);
        }
      }
    });

    function setError(element, message) {
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector('.error');

      errorElement.innerText = message;
      inputGroup.classList.add('error');
      inputGroup.classList.remove('success');
    }

    function setSuccess(element) {
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector('.error');

      errorElement.innerText = '';
      inputGroup.classList.add('success');
      inputGroup.classList.remove('error');
    }
