export const calculateOrderPrice = ({ products, promotion }) => {
    const { discount } = promotion;

    const subtotal = products.reduce(
        (accumulator, product) => accumulator + product.price
    , 0);

    const total = promotion ? subtotal * (discount/100) : subtotal;

    return { subtotal, total };
};
