function scuberGreetingForFeet(n) {

  if (n > 2500) {
    return 'No can do.';
  } else if (n > 2000) {
    return 'I will gladly take your thirty bucks.';

  }
  else {
    return "This one is on me!"

  }
}
function ternaryCheckCity(city) {
  let cityName = city === "NYC" ? "Ok, sounds good." : "No go.";
  return cityName
}


function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      
      break;
    case 'not as generous':
    return 'Thank you.'
  
    default:
      return 'Bye.'
  }
}
