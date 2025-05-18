const dummyDatabase = {
      "12345": {
      status: "In Progress",
      agency: "Water Department",
      date: "May 17, 2025"
      },
      "67890": {
      status: "Resolved",
      agency: "Roads and Transport",
      date: "May 14, 2025"
      }
};


function submitComplaint(event) {
      event.preventDefault();
      const ticketId = Math.floor(Math.random() * 100000).toString();
      alert("Complaint submitted successfully! Your ticket number is: " + ticketId);

      // You could add the data to dummyDatabase for demo purposes
      dummyDatabase[ticketId] = {
        status: "Submitted",
        agency: document.getElementById("category").value + " Department",
        date: new Date().toDateString()
      };

      document.getElementById("complaintForm").reset();
    }

    function trackComplaint() {
      const ticket = document.getElementById("ticket").value.trim();
      const statusBox = document.getElementById("statusBox");
      const statusText = document.getElementById("statusText");
      const agencyText = document.getElementById("agencyText");
      const dateText = document.getElementById("dateText");

      const result = dummyDatabase[ticket];

      if (result) {
            statusText.innerText = result.status;
            agencyText.innerText = result.agency;
            dateText.innerText = result.date;
            statusBox.style.display = "block";
      } else {
            statusText.innerText = "KANYARWANDA xxxxx";
            agencyText.innerText = "—";
            dateText.innerText = "—";
            statusBox.style.display = "block";
      }
}