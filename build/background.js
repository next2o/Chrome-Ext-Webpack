/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
//import {v4 as uuidv4} from 'uuid';

//fetch if user sync is not enabled by adding "accountStatus" param
//may need to be inside try block for legacy chrome users - otherwise it returns empy object for non-synced accounts
// let userInfo = {};
// chrome.runtime.onInstalled.addListener(function () {
//   chrome.identity.getProfileUserInfo({'accountStatus': 'ANY'}, function(info) {
//     let email = info.email;
    
//     console.log(info);
//     userInfo=JSON.stringify(info);
//     console.log(userInfo);
//     //renderApp(userInfo)
//   });
// });
// chrome.runtime.onMessage.addListener(
//   (request, sender, sendResponse) => {
//     if (request.message === "get_current_tab_url") {
//       try {
//         chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//           if (!tabs || !tabs.length) {
//             console.log("Error: No active tab found");
//             sendResponse({error: "Error: No active tab found"});
//             return;
//           }
//           const url = tabs[0].url;
//           if(!url) throw new Error("tabs[0].url is undefined");
//           // Check if the URL is valid
//           const parsedUrl = new URL(url);
//           try {
//           // Check if the URL is an internal page
//             if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
//               throw new Error(`Cannot set cookie for internal page: ${url}`);
//             } 
            
//           } catch(err) {
//             console.log(`Error handling response: ${err}`);
//             sendResponse({error: err.message});
//             return;
//           }
//           let responseData = {url, domain: parsedUrl.hostname};
//           const sixMonthsInMilliseconds = 15778476000;
//           const expirationDate = new Date(Date.now() + sixMonthsInMilliseconds);

//           chrome.cookies.get({url: url, name: "userId"}, (cookie) => {
//             let userId;
//             if (cookie) {
//               userId = cookie.value;
//             } else {
//               userId = uuidv4();
//               // generate a new unique value here
//             }
//             responseData.userId = userId;
//             console.log(cookie);
//             // Set the cookie here
//             chrome.cookies.set({
//               url: url,
//               name: "userId",
//               value: userId,
//               httpOnly: true,
//               expirationDate: Math.floor(expirationDate.getTime()/1000),
//               domain: parsedUrl.hostname
//             }, async (cookie)=>{
//               if (chrome.runtime.lastError) {
//                 sendResponse({error: chrome.runtime.lastError.message});
//                 console.log(chrome.runtime.lastError.message)
//               }
//               sendResponse(responseData);
//             });
//           });
//         });
//       } catch (error) {
//         console.log(`Error handling response: ${error}`);
//         sendResponse({error: error.message});
//       }
//     }
//     return true; // Required for async message sending to close the message sending
//   });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFVBQVUsY0FBYzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdUJBQXVCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQSw2QkFBNkIsb0NBQW9DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxJQUFJO0FBQzdFO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsdURBQXVELElBQUk7QUFDM0QsNkJBQTZCLG1CQUFtQjtBQUNoRDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUEsaUNBQWlDLHlCQUF5QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxpQ0FBaUMsd0NBQXdDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsWUFBWTtBQUNaLFdBQVc7QUFDWCxtREFBbUQsTUFBTTtBQUN6RCx5QkFBeUIscUJBQXFCO0FBQzlDO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHQvLi9zcmMvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcblxuLy9mZXRjaCBpZiB1c2VyIHN5bmMgaXMgbm90IGVuYWJsZWQgYnkgYWRkaW5nIFwiYWNjb3VudFN0YXR1c1wiIHBhcmFtXG4vL21heSBuZWVkIHRvIGJlIGluc2lkZSB0cnkgYmxvY2sgZm9yIGxlZ2FjeSBjaHJvbWUgdXNlcnMgLSBvdGhlcndpc2UgaXQgcmV0dXJucyBlbXB5IG9iamVjdCBmb3Igbm9uLXN5bmNlZCBhY2NvdW50c1xuLy8gbGV0IHVzZXJJbmZvID0ge307XG4vLyBjaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4vLyAgIGNocm9tZS5pZGVudGl0eS5nZXRQcm9maWxlVXNlckluZm8oeydhY2NvdW50U3RhdHVzJzogJ0FOWSd9LCBmdW5jdGlvbihpbmZvKSB7XG4vLyAgICAgbGV0IGVtYWlsID0gaW5mby5lbWFpbDtcbiAgICBcbi8vICAgICBjb25zb2xlLmxvZyhpbmZvKTtcbi8vICAgICB1c2VySW5mbz1KU09OLnN0cmluZ2lmeShpbmZvKTtcbi8vICAgICBjb25zb2xlLmxvZyh1c2VySW5mbyk7XG4vLyAgICAgLy9yZW5kZXJBcHAodXNlckluZm8pXG4vLyAgIH0pO1xuLy8gfSk7XG4vLyBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoXG4vLyAgIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuLy8gICAgIGlmIChyZXF1ZXN0Lm1lc3NhZ2UgPT09IFwiZ2V0X2N1cnJlbnRfdGFiX3VybFwiKSB7XG4vLyAgICAgICB0cnkge1xuLy8gICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgKHRhYnMpID0+IHtcbi8vICAgICAgICAgICBpZiAoIXRhYnMgfHwgIXRhYnMubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBObyBhY3RpdmUgdGFiIGZvdW5kXCIpO1xuLy8gICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtlcnJvcjogXCJFcnJvcjogTm8gYWN0aXZlIHRhYiBmb3VuZFwifSk7XG4vLyAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGNvbnN0IHVybCA9IHRhYnNbMF0udXJsO1xuLy8gICAgICAgICAgIGlmKCF1cmwpIHRocm93IG5ldyBFcnJvcihcInRhYnNbMF0udXJsIGlzIHVuZGVmaW5lZFwiKTtcbi8vICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgVVJMIGlzIHZhbGlkXG4vLyAgICAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuLy8gICAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIFVSTCBpcyBhbiBpbnRlcm5hbCBwYWdlXG4vLyAgICAgICAgICAgICBpZiAocGFyc2VkVXJsLnByb3RvY29sICE9PSBcImh0dHBzOlwiICYmIHBhcnNlZFVybC5wcm90b2NvbCAhPT0gXCJodHRwOlwiKSB7XG4vLyAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNldCBjb29raWUgZm9yIGludGVybmFsIHBhZ2U6ICR7dXJsfWApO1xuLy8gICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgaGFuZGxpbmcgcmVzcG9uc2U6ICR7ZXJyfWApO1xuLy8gICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtlcnJvcjogZXJyLm1lc3NhZ2V9KTtcbi8vICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgbGV0IHJlc3BvbnNlRGF0YSA9IHt1cmwsIGRvbWFpbjogcGFyc2VkVXJsLmhvc3RuYW1lfTtcbi8vICAgICAgICAgICBjb25zdCBzaXhNb250aHNJbk1pbGxpc2Vjb25kcyA9IDE1Nzc4NDc2MDAwO1xuLy8gICAgICAgICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIHNpeE1vbnRoc0luTWlsbGlzZWNvbmRzKTtcblxuLy8gICAgICAgICAgIGNocm9tZS5jb29raWVzLmdldCh7dXJsOiB1cmwsIG5hbWU6IFwidXNlcklkXCJ9LCAoY29va2llKSA9PiB7XG4vLyAgICAgICAgICAgICBsZXQgdXNlcklkO1xuLy8gICAgICAgICAgICAgaWYgKGNvb2tpZSkge1xuLy8gICAgICAgICAgICAgICB1c2VySWQgPSBjb29raWUudmFsdWU7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICB1c2VySWQgPSB1dWlkdjQoKTtcbi8vICAgICAgICAgICAgICAgLy8gZ2VuZXJhdGUgYSBuZXcgdW5pcXVlIHZhbHVlIGhlcmVcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS51c2VySWQgPSB1c2VySWQ7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29raWUpO1xuLy8gICAgICAgICAgICAgLy8gU2V0IHRoZSBjb29raWUgaGVyZVxuLy8gICAgICAgICAgICAgY2hyb21lLmNvb2tpZXMuc2V0KHtcbi8vICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4vLyAgICAgICAgICAgICAgIG5hbWU6IFwidXNlcklkXCIsXG4vLyAgICAgICAgICAgICAgIHZhbHVlOiB1c2VySWQsXG4vLyAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuLy8gICAgICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogTWF0aC5mbG9vcihleHBpcmF0aW9uRGF0ZS5nZXRUaW1lKCkvMTAwMCksXG4vLyAgICAgICAgICAgICAgIGRvbWFpbjogcGFyc2VkVXJsLmhvc3RuYW1lXG4vLyAgICAgICAgICAgICB9LCBhc3luYyAoY29va2llKT0+e1xuLy8gICAgICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4vLyAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtlcnJvcjogY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2V9KTtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaHJvbWUucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSlcbi8vICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UocmVzcG9uc2VEYXRhKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9KTtcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBoYW5kbGluZyByZXNwb25zZTogJHtlcnJvcn1gKTtcbi8vICAgICAgICAgc2VuZFJlc3BvbnNlKHtlcnJvcjogZXJyb3IubWVzc2FnZX0pO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gdHJ1ZTsgLy8gUmVxdWlyZWQgZm9yIGFzeW5jIG1lc3NhZ2Ugc2VuZGluZyB0byBjbG9zZSB0aGUgbWVzc2FnZSBzZW5kaW5nXG4vLyAgIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
