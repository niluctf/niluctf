// Wait for the page to load
setTimeout(() => {
  // Click on the "Followers" button
  let followersButton = document.querySelector('a[href*="/followers/"]');
  followersButton.click();

  // Wait for the followers list to load
  setTimeout(() => {
    // Get the list of followers
    let followersList = document.querySelectorAll('div[role="dialog"] div[role="button"] a[role="link"]');
    // Get the list of following
    let followingButton = document.querySelector('a[href*="/following/"]');
    followingButton.click();

    // Wait for the following list to load
    setTimeout(() => {
      // Get the list of following
      let followingList = document.querySelectorAll('div[role="dialog"] div[role="button"] a[role="link"]');

      // Create an array of following usernames
      let followingUsernames = [];
      followingList.forEach((item) => {
        let username = item.getAttribute('href').slice(1, -1);
        followingUsernames.push(username);
      });

      // Create an array of followers usernames
      let followersUsernames = [];
      followersList.forEach((item) => {
        let username = item.getAttribute('href').slice(1, -1);
        followersUsernames.push(username);
      });

      // Find the users who are not following back
      let notFollowingBack = followingUsernames.filter((username) => {
        return !followersUsernames.includes(username);
      });
   // et only unique values
      const distinctNotFollowingBack = [... new Set(notFollowingBack)];

      // Log the usernames who are not following back
      console.log("Users who are not following back:");
      console.log(distinctNotFollowingBack);
    }, 3000);
  }, 3000);
}, 3000);
