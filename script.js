const arrGroups = [
                  'FE2021-5',
                  'Fe2020-2',
                  'FD2021',
                  'fD2022-1',
                  'FE2020-3',
                  'FD2020/2',
                  'fe2021-3',
                  'FD2020$5',
                  'FE2008-52',
                  'Fm2008-23',
                  'FM2022-1',
                  'FD2022-5',
                  'hsFD2022-5',
                  'FD2022-5gfggh',
                  'F2022-5',
                  'FM2022-5',
                  'FE2022-5',
                  'FD2025-5',
                  'FD2023-5',
];
const groupChek = /^(F[DME]|f[dme])20\d\d(-\d+)?$/;

function validationGroups () {
  for (let i = 0; i < arrGroups.length; i++) {
    if (groupChek.test(arrGroups[i])) {
      console.log(arrGroups[i]+ ' - Success' );   
    } else {
      console.log(arrGroups[i] + ' - Error');
    }
    // console.log(groupChek.test(arrGroups[i]) ? arrGroups[i]+ ' - Success' : arrGroups[i] + ' - Error');
  }
}

validationGroups ();
console.log(' ====== Second variant use SEARCH() ====== ')

function check(str) {
  let midString;
  if (str.search(groupChek) != -1) {
    midString = 'Success'
  } else {
    midString = 'Error'
  }
  console.log(str + ' - ' + midString);
}

for (let value of arrGroups) {
  check(value);
}