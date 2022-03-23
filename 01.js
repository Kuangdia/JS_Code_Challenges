// Available Books

// Create a book class to check availability, restock, and sell functions

// Encapsulation - all functions live inside the class

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // allows you to call availability without calling Book.getAvailability();
  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesRestocked = 5) {
    this.numCopies += numCopiesRestocked;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 12345, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());