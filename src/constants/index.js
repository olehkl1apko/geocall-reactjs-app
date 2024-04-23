const FAKE_LOCATIONS = [
  {
    // Kyiv
    coords: {
      latitude: 50.4538739,
      longitude: 30.3538376,
    },
  },
  {
    coords: {
      latitude: -27.6068,
      longitude: 14.55563,
    },
  },
  {
    coords: {
      latitude: -33.87379,
      longitude: 158.13075,
    },
  },
  {
    coords: {
      latitude: 39.84008,
      longitude: 31.73172,
    },
  },
  {
    coords: {
      latitude: 46.97472,
      longitude: 22.39456,
    },
  },
  {
    coords: {
      latitude: 10.62231,
      longitude: 11.17861,
    },
  },
  {
    coords: {
      latitude: 47.76853,
      longitude: -1.97983,
    },
  },
  {
    coords: {
      longitude: -122.4194155,
      latitude: 37.7749295,
    },
  },
];

export const getFakeLocation = () => {
  return FAKE_LOCATIONS[Math.floor(Math.random() * FAKE_LOCATIONS.length)];
};

export const locationOptions = {
  enableHighAccuracy: true,
  timeout: 60000,
  maximumAge: Infinity,
};
