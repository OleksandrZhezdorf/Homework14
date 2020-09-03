
var calculations = {
    salarySum: function () {
        return this.reduce(function (acc, next) {
            return acc + next;
        }, 0);
    },
    logName: function () {
        this.forEach(function (user) {
            console.log(user.name);
        });
    },
    findUsersByIds: function (ids) {
        return this.filter(function (user) {
            return ids.find(function (id) {
                return user.id === id;
            })
        });
    }
};

var users = [
    {
        id: 1,
        name: "User 2",
        salary: 200
    },
    {
        id: 2,
        name: "User 3",
        salary: 200
    },
    {
        id: 3,
        name: "User 4",
        salary: 200
    },
];


/* salarySum */

var calculation2 = {
    salarySum2: function () {
        return users.reduce((res, i) => res + i.salary, 0)
    },
};

const salaruSum = calculation2.salarySum2.call(users)
console.log(salaruSum);

       /* или */

let result = users.map(a => a.salary);
const salaruSum2 = calculations.salarySum.call(result)
console.log('Вариант два: ' + `${salaruSum2}`);

/* logName */

const logName = calculations.logName.call(users);

/* findUsersByIds */

const findUsersByIds = calculations.findUsersByIds.call(users, [1, 3])
console.log(findUsersByIds);


