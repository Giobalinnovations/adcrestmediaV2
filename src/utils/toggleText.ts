const toggleItemExpansion = (
  index: number,
  setExpandedItems: React.Dispatch<React.SetStateAction<number[]>>
) => {
  setExpandedItems(prev =>
    prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
  );
};

export default toggleItemExpansion;
