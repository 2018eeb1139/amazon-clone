export const initialState = {
  basket: [
    // {
    //   id: "1234",
    //   title:
    //     "Acer 139 cm (55 inches) I Series 4K Ultra HD Android Smart LED TV AR55AR2851UDFL (Black)",
    //   image:
    //     "https://m.media-amazon.com/images/I/41ECCMs7tjL._SY300_SX300_QL70_FMwebp_.jpg",
    //   price: 32999,
    //   rating: 3,
    // },
    // {
    //   id: "1235",
    //   title:
    //     "OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
    //   image: "https://m.media-amazon.com/images/I/71poFSdDs5S._SX679_.jpg",
    //   price: 15490,
    //   rating: 4,
    // },
  ],
  user: null,
};

export const getTotalBasket = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove Product ${action.id} as it's not in the Basket`
        );
      }
      return { ...state, basket: newBasket };
    case "SET_USER":
      return { ...state, user: action.user };
    case "EMPTY_BASKET":
      return { ...state, basket: [] };
    default:
      return state;
  }
};

export default reducer;
