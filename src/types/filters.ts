export type SortOption = 'popularity' | 'price-asc' | 'price-desc' | 'latest';

export interface FilterState {
  category: string;
  searchQuery: string;
  sortBy: SortOption;
}

export interface FilterActions {
  setCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sort: SortOption) => void;
}