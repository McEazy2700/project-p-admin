import { writable } from 'svelte/store';
import type { AlertProps } from './types';

const { update, set, subscribe } = writable<AlertProps[]>([]);

const append = (val: Omit<AlertProps, 'id'>) => {
  update((curr) => [
    ...curr,
    {
      ...val,
      id: curr.length + 1,
      actions: [
        {
          variant: 'icon',
          icon: 'material-symbols-light:close-small-rounded',
          action: () => remove(curr.length + 1)
        },
        ...(val.actions ?? [])
      ]
    }
  ]);
};

const remove = (id: number) => {
  update((curr) => {
    const arr = [...curr];
    return arr.filter((item) => item.id !== id);
  });
};

const alertQueue = { append, remove, update, set, subscribe };
export default alertQueue;
