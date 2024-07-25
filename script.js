document.querySelector('.RegisterButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get all form inputs
    const fname = document.getElementById('fname');
    const fnumber = document.getElementById('fnumber');
    const fmail = document.getElementById('fmail');
    const dob = document.getElementById('dob');
    const fstate = document.getElementById('fstate');
    const fexam = document.getElementById('fexam');
    const fscore = document.getElementById('fscore');
    const documentInput = document.getElementById('document');
    const declaration2 = document.getElementById('declaration2');

    // Check if all fields are empty
    if (!fname.value && !fnumber.value && !fmail.value && !dob.value && fstate.value === "Select" && fexam.value === "Select" && !fscore.value && !documentInput.value && !declaration2.checked) {
        alert("All fields are mandatory to fill");
        return;
    }

    let isValid = true;
    let errorMessage = "";

    // Reset styles
    const resetField = (field) => {
        field.style.border = "";
    };

    resetField(fname);
    resetField(fnumber);
    resetField(fmail);
    resetField(dob);
    resetField(fstate);
    resetField(fexam);
    resetField(fscore);
    resetField(documentInput);
    declaration2.style.outline = "";

    // Validation Functions
    const validateTextField = (field) => {
        const textPattern = /^[a-zA-Z\s]+$/;
        if (!field.value || !textPattern.test(field.value)) {
            field.style.border = "2px solid red";
            isValid = false;
        }
    };

    const validateNumberField = (field, length) => {
        const numberPattern = /^\d+$/;
        if (!field.value || !numberPattern.test(field.value) || field.value.length !== length) {
            field.style.border = "2px solid red";
            errorMessage = "It seems the contact number you've provided is wrong";
            isValid = false;
        }
    };

    const validateEmailField = (field) => {
        const emailPattern = /\S+@\S+\.\S+/;
        if (!field.value || !emailPattern.test(field.value)) {
            field.style.border = "2px solid red";
            errorMessage = "It seems the email address you've provided is wrong";
            isValid = false;
        }
    };

    const validateDOBField = (field) => {
        const dobDate = new Date(field.value);
        const age = (new Date()).getFullYear() - dobDate.getFullYear();
        if (!field.value || age < 17) {
            field.style.border = "2px solid red";
            isValid = false;
            if (age < 17) {
                errorMessage = "You seem to be too young for your uni";
            }
        }
    };

    const validateSelectField = (field) => {
        if (field.value === "Select") {
            field.style.border = "2px solid red";
            isValid = false;
        }
    };

    const validateFileField = (field) => {
        if (!field.value) {
            field.style.border = "2px solid red";
            isValid = false;
        }
    };

    const validateCheckboxField = (field) => {
        if (!field.checked) {
            field.style.outline = "2px solid red";
            isValid = false;
        }
    };

    // Validate each field
    validateTextField(fname);
    validateNumberField(fnumber, 10);
    validateEmailField(fmail);
    validateDOBField(dob);
    validateSelectField(fstate);
    validateSelectField(fexam);
    validateFileField(documentInput);
    validateCheckboxField(declaration2);

    // Validate score as a floating number
    if (!fscore.value || isNaN(parseFloat(fscore.value))) {
        fscore.style.border = "2px solid red";
        isValid = false;
    }

    // Check if the form is valid
    if (!isValid) {
        if (errorMessage === "") {
            alert("It seems you've missed some of the fields");
        } else {
            alert(errorMessage);
        }
    } else {
        alert("Form submitted successfully!");

        // Clear all fields
        fname.value = '';
        fnumber.value = '';
        fmail.value = '';
        dob.value = '';
        fstate.value = 'Select';
        fexam.value = 'Select';
        fscore.value = '';
        documentInput.value = '';
        declaration2.checked = false;

        // Reset styles
        resetField(fname);
        resetField(fnumber);
        resetField(fmail);
        resetField(dob);
        resetField(fstate);
        resetField(fexam);
        resetField(fscore);
        resetField(documentInput);
        declaration2.style.outline = "";
    }
});