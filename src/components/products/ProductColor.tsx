interface ProductColorProps {
    selectedColor: string;
    setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const ProductColor = ({selectedColor, setSelectedColor}: ProductColorProps) => {
    const colors=[
    { id: '1', name: 'Shadow Navy', value: 'navy' },
    { id: '2', name: 'Army Green', value: 'green' },
  ]
    return (
          <div className="flex gap-2">
                {colors?.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    aria-label={color.name}
                    className={`w-7 h-7 rounded-full border-2 cursor-pointer transition-all ${selectedColor === color.id
                        ? 'border-stone-800 ring-2 ring-stone-800 ring-offset-1'
                        : 'border-stone-300 hover:border-stone-400'
                      }`}
                    style={{
                      backgroundColor: color.value === 'navy' ? '#253043' : '#707E6E',
                    }}
                  />
                ))}
              </div>
    );
};

export default ProductColor;