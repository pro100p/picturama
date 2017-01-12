import processDates from './../lib/process-dates';

const rmDevice = (devices, rmDevice) => {
  let pos = -1;

  devices.forEach((device, index) => {
    if (device.id == rmDevice.id)
      pos = index;
  });

  return [
    ...devices.slice(0, pos),
    ...devices.slice(pos + 1)
  ];
};

export default function reducers(state, action) {
  switch (action.type) {
  case 'GET_DATES_SUCCESS':
    return {
      ...state,
      dates: processDates(action.dates)
    };

  default:
    return state;
  }
}

