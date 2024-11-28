const CompleteJob = document.querySelector('#CompleteJob');
const YourName = document.querySelector('#WhoYou');
const YourAge = document.querySelector('#Age')
const YourNumber = document.querySelector('#PhoneNumber')
const YourEmail = document.querySelector('#Email')

function submit(event) {
  event.preventDefault();
  
  const FullName = YourName.value;
  const PersonAge = YourAge.value;
  const PersonNumber = PhoneNumber.value;
  const PersonEmail = YourEmail.value;

  console.log(FullName);
  console.log(PersonAge);
  console.log(PersonNumber);
  console.log(PersonEmail);
}

CompleteJob.addEventListener('click', submit);
