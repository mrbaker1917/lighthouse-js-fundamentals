let facebookProfile = {
  name: "Mark R. Baker",
  friends: 45,
  messages: ["That is just awful!", "Awesome", "About time", "Please sing this!"],
  postMessage: function(message) {
    return facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    return facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
    return this.friends ++;
  },
  removeFriend: function() {
    return this.friends--;
  }
};
//tests
console.log(facebookProfile.postMessage("I have been hacked!"));
console.log(facebookProfile.messages);
console.log(facebookProfile.deleteMessage(2));
console.log(facebookProfile.messages);
console.log(facebookProfile.addFriend());
console.log(facebookProfile.friends);
console.log(facebookProfile.removeFriend());
console.log(facebookProfile.friends);