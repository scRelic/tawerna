import {ref, computed} from "vue";
import {defineStore} from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    name: "User",
    email: "email@gmail.com",
    password: "password",
    balance: 500000,
    number_of_purchases: 0,
    total_spent: 0,
  });

  const inventory = ref([]);

  const saveChangesProfile = (data) => {
    user.value.name = data.name;
    user.value.email = data.email;
    user.value.password = data.password;
  };

  const buyItem = (item) => {
    if (user.value.balance >= item.price) {
      user.value.balance -= item.price;
      user.value.number_of_purchases++;
      user.value.total_spent += item.price;
      inventory.value.push(item);
      console.log("Item bought: ", item.name);
    } else {
      console.log("Not enough coins");
    }
  };

  return {user, inventory, buyItem, saveChangesProfile};
});
