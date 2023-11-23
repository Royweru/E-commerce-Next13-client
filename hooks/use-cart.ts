import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from '@/components/ui/use-toast';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (data: Product) => {
    const currentItems = get().items;
    const existingItems = currentItems.find((item) => item.id === data.id);
    if (existingItems) {
      return toast({
        description: 'Item already in cart',
        duration: 5000,
      });
    }
    set({ items: [...get().items, data] });
    toast({
      title: 'Success',
      description: 'Item added to cart successfully!',
      duration: 3000,
    });
  },
  removeItem: (id: string) => {
    set({ items: [...get().items.filter((item) => item.id !== id)] });
    toast({
      description: 'Item removed from cart',
      duration: 3000,
    });
  },
  removeAll: () => set({ items: [] }),
}));

const usePersistedCart = persist<CartStore>(
  useCart,
  {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage),
  }
);

export default usePersistedCart;
