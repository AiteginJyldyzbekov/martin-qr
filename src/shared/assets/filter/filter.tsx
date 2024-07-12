export const filterProducts = (products: any[], filters: any): any[] => {
    let filteredProducts = products;
  
    // Фильтрация по размеру
    if (filters.size) {
      filteredProducts = filteredProducts.filter(product =>
        product.size.includes(filters.size!)
      );
    }
  
    // Фильтрация по цвету
    if (filters.color) {
      filteredProducts = filteredProducts.filter(product =>
        product.colors.includes(filters.color!)
      );
    }
  
    // Сортировка по цене
    if (filters.sortByPrice) {
      filteredProducts = filteredProducts.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return filters.sortByPrice === 'asc' ? priceA - priceB : priceB - priceA;
      });
    }

    if (filters.searchValue && filters.searchValue.trim() !== '' || "") {
        const searchValueLower = filters.searchValue.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
          product.title.toLowerCase().includes(searchValueLower) ||
          product.desc.toLowerCase().includes(searchValueLower)
        );
      }
  
    return filteredProducts;
  };