const limit = 1;
const cari = "i";

const searchName = (cari, batas, callback) => {
  const name = ['i','n','t','e','r','v','i','e','w'];

  const filterName = name.filter(function (el) {
    return el.toLowerCase().indexOf(cari.toLowerCase()) !== -1
  });
  return callback(filterName, batas);
};
const result = (nameList, limit) => {
  const namaNama = nameList.slice(0, limit);
  return namaNama;
}
console.log(searchName(cari, limit, result));