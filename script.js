users = [
  {
    id: '1',
    name: 'Norah',
  },
  {
    id: '2',
    name: 'Alyx',
  },
];

accounts = [
  {
    acount: 'IRA-4679',
    user: '1',
    balance: '5175.36',
  },
  {
    acount: 'AAA-3571',
    user: '1',
    balance: '3106701.85',
  },
  {
    acount: 'AAA-4671',
    user: '1',
    balance: '138971.19',
  },
  {
    acount: 'ROT-1687',
    user: '2',
    balance: '2686.00',
  },
  {
    acount: 'AAA-7894',
    user: '2',
    balance: '68761.32',
  },
  {
    acount: 'IRA-6818',
    user: '2',
    balance: '564.67',
  },
  {
    acount: 'IRA-6819',
    user: '2',
    balance: '6564.67',
  },
];

(function () {
  getResults();
})();

function getResults() {
  let resultA = [];
  let user = 'Norah';
  let userInfo = users.find((f) => f.name == user);
  let accountsinfo = accounts.filter((f) => f.user == userInfo.id);

  accountsinfo.forEach((element) => {
    resultA.push(user + '|' + element.acount + '|' + element.balance);
  });
  console.log(resultA);

  let resultB = [];
  accountsinfo = accountsinfo.sort(function (a, b) {
    return a['balance'] - b['balance'];
  });
  accountsinfo.forEach((element) => {
    resultB.push(user + '|' + element.acount + '|' + element.balance);
  });
  console.log(resultB);

  let resultC = [];
  user = 'Alyx';
  userInfo = users.find((f) => f.name == user);
  accountsinfo = accounts.filter(
    (f) => f.user == userInfo.id && f.acount.includes('IRA')
  );
  accountsinfo = accountsinfo.sort(function (a, b) {
    return b['balance'] - a['balance'];
  });
  accountsinfo.forEach((element) => {
    resultC.push(user + '|' + element.acount + '|' + element.balance);
  });
  console.log(resultC);

  let resultD = [];
  accounts = accounts.sort(function (a, b) {
    return a['balance'] - b['balance'];
  });
  accounts.forEach((element) => {
    resultD.push(
      users.find((f) => f.id == element.user).name +
        '|' +
        element.acount +
        '|' +
        element.balance
    );
  });
  console.log(resultD);
}
