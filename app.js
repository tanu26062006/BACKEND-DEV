import NewMember from "./LibraryManagemant/newmember.js";
import addbook from "./LibraryManagemant/addbook.js";
import borrowRecord from "./LibraryManagemant/boorowbook.js";


addbook("Atomic Habits", "Atomic Habits", "James Clear", 300);
addbook("The Alchemist", "The Alchemist", "Paulo Coelho", 250);
addbook("Deep Work", "Deep Work", "Cal Newport", 350);
NewMember("Amit Verma", "amit@gmail.com", "gold");
NewMember("Neha Singh", "neha@gmail.com", "silver");
NewMember("Priya Gupta", "priya@gmail.com", "gold");
borrowRecord("Amit Verma", "Atomic Habits", 1);
borrowRecord("Neha Singh", "The Alchemist", 3);
borrowRecord("Priya Gupta", "Deep Work", 2);