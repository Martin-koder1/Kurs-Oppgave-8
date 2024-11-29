const CompleteJob = document.querySelector('#CompleteJob');
const YourName = document.querySelector('#WhoYou');
const YourAge = document.querySelector('#Age')
const YourNumber = document.querySelector('#PhoneNumber')
const YourEmail = document.querySelector('#Email')

const FemaleElement = document.querySelector("#Female")
const MaleElement = document.querySelector("#Male")
const OtherElement = document.querySelector("#Other")

function submit(event) {
  event.preventDefault();
  
  const FullName = YourName.value;
  const PersonAge = YourAge.value;
  const PersonNumber = YourNumber.value;
  const PersonEmail = YourEmail.value;

  const GenderArray = [];

  if (FemaleElement.checked === true) {
    GenderArray.push(FemaleElement.value)
  }
  if (MaleElement.checked === true) {
    GenderArray.push(MaleElement.value)
  }
  if (OtherElement.checked === true) {
    GenderArray.push(OtherElement.value)
  }

  console.log(FullName);
  console.log(PersonAge);
  console.log(PersonNumber);
  console.log(PersonEmail);
  console.log(GenderArray);
}

CompleteJob.addEventListener('click', submit);


const PiCalculator = document.querySelector('#PiCalculator');

const MultiplyPiButton = document.querySelector('#MultiplyPi');

const resultDiv = document.querySelector('#result');

function multiplying(event) {
  event.preventDefault(); 

  const MultiplyNumber = PiCalculator.value;

  const Pi = MultiplyNumber * 3.14;  

  resultDiv.textContent = `Result: ${MultiplyNumber} * 3.14 = ${Pi}`;
}

MultiplyPiButton.addEventListener("click", multiplying);