const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let atLeastThreeLangs = users.filter(function(user){
    return user.languages.length >=3;
    }
)
console.log(atLeastThreeLangs);

let emailAddresses = users.map(function(user){
    return user.email;
})
console.log(emailAddresses);

let totalYearExp = users.reduce(function(accum,user){
    return accum + user.yearsOfExperience;
}, 0);
 console.log(totalYearExp);

 let averageExp = totalYearExp / users.length;
 console.log(averageExp);

 let longestEmail = users.reduce(function(currentLongest,user){
     if (user.email.length> currentLongest.email.length){
         return user;
     }  else {
         return currentLongest;
     }
 }, users[0]);

 console.log(longestEmail.email);

 let nameString = users.reduce(function(accum, user){
     if(accum === ''){
         return "Your instructors are:" + user.name
     } else {
         return accum + ',' + user.name;
     }
 }, '')
console.log(nameString + '.');
 let nameStringMap = users.map(function(user){
     return user.name;
 })
console.log("your instructors are " + nameStringMap + '.');
 let concatLangs = users.reduce(function(accum, user){
     return accum.concat(user.languages);
 }, []);

 let uniqueLangs = concatLangs.reduce(function(accum, currentValue){
     if(accum.indexOf(currentValue) === -1){
         accum.push(currentValue);
     }
     return accum;
 }, [])
console.log(uniqueLangs);
