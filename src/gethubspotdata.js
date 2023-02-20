function getHubspotData(formName) {
  var readCookie = (function () {
    return {
      getCookie: function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) {
          return parts.pop().split(";").shift();
        }
      },
    };
  })();

  if (document.getElementById(formName)) {
    var formId = document.getElementById(formName);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://api.ipify.org?format=json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        formId.querySelector("[clientip]").value = result.ip;
        formId.querySelector("[pageuri]").value = window.location.href;
        formId.querySelector("[pagename]").value = document.title;
      })
      .catch((error) => console.log("error", error));

    if (readCookie.getCookie("hubspotutk") !== undefined) {
      formId.querySelector("[hubspotutk]").value =
        readCookie.getCookie("hubspotutk");
    } else {
      formId.querySelector("[hubspotutk]").value = "";
    }
  }
}
