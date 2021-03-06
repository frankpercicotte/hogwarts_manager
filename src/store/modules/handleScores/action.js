export const handleChosenHouse = (getHouse) => ({
  type: '@CHOSEN/HOUSE',
  getHouse
});

export const handleClickHouse = (getBool) => ({
  type: '@CLICK/HOUSE',
  getBool
});
