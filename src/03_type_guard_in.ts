type Alphanumeric = number | string

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  else {
    return num1.toString() + num2.toString();
  }
}

// ###### If I want to do this, then the upper code for this ###### //
add(2, 2) // 4
add(2, "2") // 22
add('2', 2) // 22
add('2', "2") // 22
// ###### If I want to do this, then the upper code for this ###### //

// ------------------------------------ //

// In type guard //
type NormalUser = {
  name: string
}

type SpecialUser = {
  name: string;
  role: string;
}

const getUserInfo = (user: NormalUser | SpecialUser) => {
  if ("role" in user) {
    console.log(`The user is ${user.name} and his role is ${user.role}`);
  }
  else {
    console.log(`This user is ${user.name}`);
  }
}

const user1: NormalUser = {
  name: "Mir"
}

const user2: SpecialUser = {
  name: "Mezba",
  role: "Moderator"
}

getUserInfo(user1);
getUserInfo(user2);
/*
  Ekhane ekhon type guard er maddhome emon kora hoise je shudhu name 
  pass korle NormalUser er type er ta print hobe ar name and role pathale
  SpecialUser er ta print hobe
*/