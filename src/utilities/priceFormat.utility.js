export const priceFormat = (price) => {
   return Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "arg"
   }).format(price)
}