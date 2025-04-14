interface propsType {
  size: string;
}

const CartCount = ({ size }: propsType) => {
  return (
    <div
      className={`absolute grid place-items-center bg-rose-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full`}
    >
      0
    </div>
  );
};

export default CartCount;
