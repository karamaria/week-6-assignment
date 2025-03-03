I created a game called Gem Clicker, where you collect gems by clicking on a ruby image. I used the useState hook to manage the number of gems and the gem per second (GPS) rate, and useEffect to save the gems in local storage and to update the gems periodically based on the GPS. I also added an upgrades system where you can purchase upgrades to increase your gem collection rate, using data fetched from an external API.

The game stores your progress locally, so the gems you've collected persist even if you refresh the page. I made the application dynamic by using the .map() function to display available upgrades, and I applied logic to manage purchases and the effects of each upgrade. The application also features periodic gem accumulation with the help of setInterval.

For styling, I made the application responsive and added improvements to the user interface.

Although I had plans to change the cursor to a custom image, I couldn’t fully implement it, possibly needing additional changes in the App.jsx?? I added that line - cursor: url(https://images-...), auto !important), but it didn’t work as expected :(
