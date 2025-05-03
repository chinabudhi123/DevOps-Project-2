document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const seat = document.getElementById("seat").value;

  const res = await fetch("/api/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, seat }),
  });

  const msg = await res.json();
  alert(msg.message);
  loadBookings();
});

async function loadBookings() {
  const res = await fetch("/api/bookings");
  const bookings = await res.json();
  const ul = document.getElementById("bookings");
  ul.innerHTML = "";
  bookings.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = `${b.name} booked seat ${b.seat}`;
    ul.appendChild(li);
  });
}

loadBookings();

