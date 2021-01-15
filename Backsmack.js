chrome.webRequest.onBeforeRequest.addListener(
    Function(details) { return { cancel: true }}

)
