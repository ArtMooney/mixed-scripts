function getHubspotData(formName) {
  if (document.getElementById(formName)) {
    var formId = document.getElementById(formName);

    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://api.ipify.org?format=json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        formId.clientip.value = result.ip;
        formId.pageuri.value = window.location.href;
        formId.pagename.value = document.title;
      })
      .catch((error) => console.log("error", error));

    if (readCookie.getCookie("hubspotutk") !== undefined) {
      formId.hubspotutk.value = readCookie.getCookie("hubspotutk");
    } else {
      formId.hubspotutk.value = "";
    }
  }
}
