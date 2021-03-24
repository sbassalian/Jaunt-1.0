export const makeArray = (listings) => (
    Object.keys(listings).map(key => listings[key])
);