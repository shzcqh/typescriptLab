import { Friend, Colleague, ColleagueHistory } from './myTypes';


  
// (Optional) Change the names below to your friends.

const friend1: Friend = {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 25,
    dob: new Date("1998-11-20"), 
  };
  
  const friend2: Friend = {
    name: "Jane Costello",
    phone: "086--12345",
    age: 31,
    interests: ['Music', 'Sport'], 
  };
  
  
  export const friends: Friend[] = [friend1, friend2];
  //console.log(friends[1]);
  
  
  //   -------------------
  const colleague1: Colleague = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
  const colleague4: Colleague = {
    name: "Jane Costello", 
    department: "HR",
    contact: {
      email: "jcostello@company.com",
      extension: 140,
    },
  };
  
 
  export const colleagues: ColleagueHistory = {
    current: [colleague1, colleague2, colleague3,colleague4],
    former: [],
  };
  
  //console.log(colleagues.current[0]);