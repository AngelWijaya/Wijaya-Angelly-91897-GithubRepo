export const useLocalStorage = (storageKey: string) => {
	// eslint-disable-next-line
    const saveToLocalStorage = (data: any) => {
		localStorage.setItem(storageKey, JSON.stringify(data));
	};

	const loadFromLocalStorage = <T>(): T[] => {
		const wantedData = localStorage.getItem(storageKey);
		return typeof wantedData === 'string' ? JSON.parse(wantedData):[];
	};
	
	return {
		saveToLocalStorage,
		loadFromLocalStorage,
		
	};
};