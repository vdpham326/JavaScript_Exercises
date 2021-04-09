const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [], 
    },
    get appetizers() {
  
    },
    set appetizers(appetizersIn) {
  
    }, 
    get mains() {
  
    },
    set mains(mainsIn) {
  
    },
    get desserts() {
  
    },
    set desserts(dessertsIn) {
  
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    }, 
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse (courseName) {
      let dishes = this._courses[courseName];
      let index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
    generateRandomMeal () {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
       return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`;
    }
  
  };
  
  
  menu.addDishToCourse('appetizers', 'salad', 5.0);
  menu.addDishToCourse('desserts', 'ice cream', 4.0);
  menu.addDishToCourse('mains', 'pasta', '9.23');
  
  menu.addDishToCourse('appetizers', 'bread', 2.0);
  menu.addDishToCourse('desserts', 'cookie', 4.5);
  menu.addDishToCourse('mains', 'noodle', 7.23);
  
  menu.addDishToCourse('appetizers', 'cracker', 1.0);
  menu.addDishToCourse('desserts', 'vanilla bar', 3.0);
  menu.addDishToCourse('mains', 'rice', 9.0);
  
  
  const meal = menu.generateRandomMeal();
  console.log(meal);