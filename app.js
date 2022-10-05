const data = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

const workCH = document.querySelector('.work_CH');
const workLH = document.querySelector('.work_LH');

const playCH = document.querySelector('.play_CH');
const playLH = document.querySelector('.play_LH');

const studyCH = document.querySelector('.study_CH');
const studyLH = document.querySelector('.study_LH');

const exerciseCH = document.querySelector('.exercise_CH');
const exerciseLH = document.querySelector('.exercise_LH');

const socialCH = document.querySelector('.social_CH');
const socialLH = document.querySelector('.social_LH');

const selfCH = document.querySelector('.self_CH');
const selfLH = document.querySelector('.self_LH');

//Daily Data
daily.addEventListener('click', () => {
  workCH.innerHTML = `${data[0].timeframes.daily.current}${
    data[0].timeframes.daily.current > 1 ? 'Hrs' : 'Hr'
  } `;
  workLH.innerHTML = `Last Week -${data[0].timeframes.daily.previous}${
    data[0].timeframes.daily.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  playCH.innerHTML = `${data[1].timeframes.daily.current}${
    data[1].timeframes.daily.current > 1 ? 'Hrs' : 'Hr'
  } `;
  playLH.innerHTML = `Last Week -${data[1].timeframes.daily.previous}${
    data[1].timeframes.daily.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  studyCH.innerHTML = `${data[2].timeframes.daily.current}${
    data[2].timeframes.daily.current > 1 ? 'Hrs' : 'Hr'
  } `;
  studyLH.innerHTML = `Last Week -${data[2].timeframes.daily.previous}${
    data[2].timeframes.daily.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  exerciseCH.innerHTML = `${data[3].timeframes.daily.current}${
    data[3].timeframes.daily.current > 1 ? 'Hrs' : 'Hr'
  } `;
  exerciseLH.innerHTML = `Last Week -${data[3].timeframes.daily.previous}${
    data[3].timeframes.daily.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  socialCH.innerHTML = `${data[4].timeframes.daily.current}${
    data[4].timeframes.daily.current > 1 ? 'Hrs' : 'Hr'
  } `;
  socialLH.innerHTML = `Last Week -${data[4].timeframes.daily.previous}${
    data[4].timeframes.daily.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  selfCH.innerHTML = `${data[5].timeframes.daily.current}${
    data[5].timeframes.daily.current > 1 ? 'Hrs' : 'Hr'
  } `;
  selfLH.innerHTML = `Last Week -${data[5].timeframes.daily.previous}${
    data[5].timeframes.daily.previous > 1 ? 'Hrs' : 'Hr'
  }`;
});

//Weekly Data
weekly.addEventListener('click', () => {
  workCH.innerHTML = `${data[0].timeframes.weekly.current}${
    data[0].timeframes.weekly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  workLH.innerHTML = `Last Week -${data[0].timeframes.weekly.previous}${
    data[0].timeframes.weekly.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  playCH.innerHTML = `${data[1].timeframes.weekly.current}${
    data[1].timeframes.weekly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  playLH.innerHTML = `Last Week -${data[1].timeframes.weekly.previous}${
    data[1].timeframes.weekly.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  studyCH.innerHTML = `${data[2].timeframes.weekly.current}${
    data[2].timeframes.weekly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  studyLH.innerHTML = `Last Week -${data[2].timeframes.weekly.previous}${
    data[2].timeframes.weekly.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  exerciseCH.innerHTML = `${data[3].timeframes.weekly.current}${
    data[3].timeframes.weekly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  exerciseLH.innerHTML = `Last Week -${data[3].timeframes.weekly.previous}${
    data[3].timeframes.weekly.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  socialCH.innerHTML = `${data[4].timeframes.weekly.current}${
    data[4].timeframes.weekly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  socialLH.innerHTML = `Last Week -${data[4].timeframes.weekly.previous}${
    data[4].timeframes.weekly.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  selfCH.innerHTML = `${data[5].timeframes.weekly.current}${
    data[5].timeframes.weekly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  selfLH.innerHTML = `Last Week -${data[5].timeframes.weekly.previous}${
    data[5].timeframes.weekly.previous > 1 ? 'Hrs' : 'Hr'
  }`;
});

//Monthly data
monthly.addEventListener('click', () => {
  workCH.innerHTML = `${data[0].timeframes.monthly.current}${
    data[0].timeframes.monthly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  workLH.innerHTML = `Last Week -${data[0].timeframes.monthly.previous}${
    data[0].timeframes.monthly.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  playCH.innerHTML = `${data[1].timeframes.monthly.current}${
    data[1].timeframes.monthly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  playLH.innerHTML = `Last Week -${data[1].timeframes.monthly.previous}${
    data[1].timeframes.monthly.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  studyCH.innerHTML = `${data[2].timeframes.monthly.current}${
    data[2].timeframes.monthly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  studyLH.innerHTML = `Last Week -${data[2].timeframes.monthly.previous}${
    data[2].timeframes.monthly.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  exerciseCH.innerHTML = `${data[3].timeframes.monthly.current}${
    data[3].timeframes.monthly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  exerciseLH.innerHTML = `Last Week -${data[3].timeframes.monthly.previous}${
    data[3].timeframes.monthly.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  socialCH.innerHTML = `${data[4].timeframes.monthly.current}${
    data[4].timeframes.monthly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  socialLH.innerHTML = `Last Week -${data[4].timeframes.monthly.previous}${
    data[4].timeframes.monthly.previous > 1 ? 'Hrs' : 'Hr'
  }`;

  selfCH.innerHTML = `${data[5].timeframes.monthly.current}${
    data[5].timeframes.monthly.current > 1 ? 'Hrs' : 'Hr'
  } `;
  selfLH.innerHTML = `Last Week -${data[5].timeframes.monthly.previous}${
    data[5].timeframes.monthly.previous > 1 ? 'Hrs' : 'Hr'
  }`;
});
