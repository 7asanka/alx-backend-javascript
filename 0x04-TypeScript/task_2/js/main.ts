/* Task 5 */
/* director interface */ 

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
/* teacher interface */ 

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/* director class */

class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home'
  }

  getCoffeeBreak(): string {
    return 'Geting a coffee break'
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

/* teacher class */ 

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof(salary) === 'number' && salary < 500) {
    return new Teacher();
  }
  else {
    return new Director();
  }
}

/* Task 6 */
/* isDirector */

const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

/* executeWork */
const executeWork = (employee: Teacher | Director): string => {
  let res;
  isDirector(employee) ? res = (employee as Director).workDirectorTasks() : res = (employee as Teacher).workTeacherTasks();
  return res;
};

/* Task 7 */
/* string literals */ 

type Subjects = 'Math' | 'Chemistry';

function teachClass (todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  else {
    return 'Teaching Chemistry';
  }    
}
