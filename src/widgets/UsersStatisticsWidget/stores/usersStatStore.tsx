import { create } from "zustand";
import zukeeper from "zukeeper";
import { immer } from "zustand/middleware/immer";

import { DatasetModel } from "../models";

interface UsersStatStore {
  dataset: DatasetModel[];
  addUser: () => void;
}

const usersStatStore = create<UsersStatStore, [["zustand/immer", never]]>(
  immer(
    zukeeper((set) => ({
      dataset: [],
      addUser: () =>
        set((state) => {
          const currentDate = new Date().toDateString();
          const findDateIndex = state.dataset.findIndex(
            (el) => el.date === currentDate
          );
          if (findDateIndex !== -1) {
            const findDate = state.dataset[findDateIndex];
            const newAmount = findDate.users + 1;
            findDate.users = newAmount;
            state.dataset[findDateIndex] = findDate;
          } else {
            state.dataset.push({ users: 1, date: currentDate });
          }
        }),
    }))
  )
);

window.store = usersStatStore;

export default usersStatStore;
