const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {                     // Δηλώνουμε τη συνάρτηση με όνομα addTask – εκτελείται όταν πατηθεί το κουμπί "Add"
    if (inputBox.value === '') {         // Αν το πεδίο εισόδου (inputBox) είναι κενό...
        alert("You must write something!"); // ...εμφανίζει προειδοποιητικό μήνυμα στον χρήστη με alert
    } else {                             // Αλλιώς – δηλαδή αν υπάρχει κείμενο στο input
        const li = document.createElement("li");    // Δημιουργεί ένα νέο στοιχείο <li> (λίστα)
        li.innerHTML = inputBox.value;            
        listContainer.appendChild(li);              // Προσθέτει το νέο <li> μέσα στη λίστα (ul ή ol) που λέγεται listContainer
        let span = document.createElement("span"); // Δημιουργεί ένα νέο στοιχείο <span> για το κουμπί διαγραφής
        span.innerHTML = "\u00D7";                // Ορίζει το περιεχόμενο του <span> ως το σύμβολο διαγραφής (×)
        li.appendChild(span);                  // Προσθέτει το <span> στο <li>
    
    
    
    }
    inputBox.value = "";                     // Καθαρίζει το πεδίο εισόδου (inputBox) μετά την προσθήκη της εργασίας
    inputBox.focus();                        // Επαναφέρει το focus στο πεδίο εισόδου για να διευκολύνει την προσθήκη νέων εργασιών
}   
listContainer.addEventListener("click", function(e) { // Προσθέτει ακροατή συμβάντων για κλικ στο listContainer
    if (e.target.tagName === "LI") {        // Αν το στοιχείο που κλικάρεται είναι <li>
        e.target.classList.toggle("checked"); // Εναλλάσσει την κλάση "checked" για να αλλάξει την εμφάνιση της εργασίας
    } else if (e.target.tagName === "SPAN") { // Αν το στοιχείο που κλικάρεται είναι <span>
        e.target.parentElement.remove();      // Αφαιρεί το γονικό στοιχείο του <span> (δηλαδή το <li>) από τη λίστα
    }
}, false); // Ορίζει το τρίτο όρισμα ως false για να μην χρησιμοποιείται η φάση "capture"
// Προσθέτει ένα ακροατή συμβάντων για το κουμπί "Add" που καλεί τη συνάρτηση addTask όταν πατηθεί  

function saveData() {
   localStorage.setItem("tasks", listContainer.innerHTML); // Αποθηκεύει το περιεχόμενο της λίστας στο localStorage
}