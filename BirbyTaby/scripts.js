const clock = document.getElementById("clock");
const date = document.getElementById("date");
const greeting = document.getElementById("gree");
function updtime(){
    const now = new Date();
    clock.textContent = now.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit",
        second: "2-digit", hour12: true
    });
    date.textContent = now.toLocaleDateString([], {weekday: "long", month: "long",
        day: "numeric", year: "numeric"
    });
    const hour = now.getHours();
    if(hour < 12){greeting.textContent = "Good Morning ^^"}
    else if(hour < 18){greeting.textContent = "Good Afternoon ^^"}
    else{greeting.textContent = "Good Evening ^^"}
}
updtime();
setInterval(updtime, 1000);
const sefo = document.getElementById("seaform");
sefo.addEventListener("submit", function(e){e.preventDefault();
    const search = document.getElementById("seainput").value.trim();
    if(search !== ""){window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(search);}
});
const note = document.getElementById("notes");
note.value = localStorage.getItem("birbnote") || "";
document.getElementById("savenote").addEventListener("click", function(){
    localStorage.setItem("birbnote", note.value);
    alert("Your notes are saved.");
});
document.getElementById("clearnote").addEventListener("click", function(){
    note.value = "";
    localStorage.removeItem("birbnote");
});

