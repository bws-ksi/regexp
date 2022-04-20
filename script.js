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
                  'FD2022-5',
                  'FD2022-5',
                  'FD2022-5',
                  'FD2022-5',
                  'FD2022-5',
                  'FD2022-5',
                  'FD2022-5',
];
// const groupChek = /(\W|^)(FD|FM|FE|fd|fm|fe)(20)\d\d(-\d+)?/g;
const groupChek = /^(F[DME]|f[dme])20\d\d(-\d+)?$/g;

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