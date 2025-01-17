// The scope of `random` is too loose 

const getRandEvent = () => {

  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {

  let days;

  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

const name = 'Nala';

// The scope of `name` is too tight 
const logEvent = (name, event) => {
  document.querySelector('p:nth-child(1)').innerHTML = `${name}'s event is: ${event}`;
};

const logTime = (name, days) => {
  document.querySelector('p:nth-child(2)').innerHTML = `${name}'s time to train is: ${days} days`;
};

const logEventTwo = (name, event) => {
  document.querySelector('p:nth-child(3)').innerHTML = `${name}'s event is: ${event}`;
};

const logTimeTwo = (name, days) => {
  document.querySelector('p:nth-child(4)').innerHTML = `${name}'s time to train is: ${days} days`;
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEventTwo(name2, event2);
logTimeTwo(name2, days2);
