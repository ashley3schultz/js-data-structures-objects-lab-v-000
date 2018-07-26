// Write your solution in this file!
const driver = { foo: 'bar' };

function updateDriverWithKeyAndValue(driver, key, value){
  const new = driver
  new[key] = value
  return new
}