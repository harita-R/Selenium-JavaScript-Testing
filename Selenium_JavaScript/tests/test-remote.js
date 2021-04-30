const USERNAME ='haritagr16'; //replace with your email address
const KEY = 'KhRUhWBtSMg06DfGkKDY1khYNJm95695WV42HfaYPot7nqQfw6'; //replace with your authkey
 
const {Builder,Key,By} = require("selenium-webdriver");
// require("chromedriver");
const GRID_HOST = 'hub.lambdatest.com/wd/hub';

async function example(){

    var capabilities = {
        "build" : "JavaScript and Selenium Testing",
        "name" : "Google search",
        "platform" : "Windows 10",
        "browserName" : "Chrome",
        "version" : "90.0",
        "selenium_version" : "3.13.0",
        "chrome.driver" : "90.0"
    }
    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;


      //To wait for browser to build and launch properly
      let driver = await new Builder()
      .usingServer(gridUrl)
      .withCapabilities(capabilities)
      .build();

       var searchString = "Automation testing with Selenium";
       
        //To fetch http://google.com from the browser with our code.
        await driver.get("http://google.com");
            
        //To send a search query by passing the value in searchString.
        await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);

        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);

        //It is always a safe practice to quit the browser after execution
        await driver.quit();
 
}

example()