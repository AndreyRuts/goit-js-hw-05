const profile = {
    username: "Jacob",
    playTime: 300,

    getInfo() {
        return `${profile.username} has ${profile.playTime} active hours!`;
    },
    changeUsername(newName) {
        return profile.username = newName;
    },
    updatePlayTime(hours) {
        return profile.playTime += hours;
    }
};

console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());