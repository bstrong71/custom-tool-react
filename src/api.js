import axios from 'axios';


//Create new post call using the telit auth command

axios.post(
  `https://api-dev.devicewise.com/api`,
  {
    auth: {
      command: 'api.authenticate',
      params: {
        username: 'ADD YOUR USERNAME HERE',
        password: 'ADD YOUR PASS HERE'
      }
    }
  },
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
)
.then(function (response) {
// Use .then to wait for a response

//Narrow down response to the desired session id
  const sessionId = response.data.auth.params.sessionId
  //Globally store the session id
  localStorage.setItem('session', sessionId)
  // console.log('key', response, sessionId)
})
.catch(function (error) {
//Catch any errors
  console.log('key errror', error)
})

// call command get devices to list all devices
// export as const so components can import it like they improt components
// create post request using telits api for thing.list
// dont forget to also send your authed code
export const getDevices = () =>

axios.post(
  `https://api-dev.devicewise.com/api`,
  {
    cmd: {
      command: 'thing.list',
    },
    auth: {
      sessionId: localStorage.getItem('session')
    }
  },
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
)
.then(function (response) {
//Narrow down results
  var devices = response.data.cmd.params.result
  //View results in console
  console.log(devices)

    //Return the narrowed results to your compenent
  return devices
})
.catch(function (error) {
//Catch errors
  console.log('M2X API Error', error)
})
