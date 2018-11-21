export interface AppState {
	isLoading: boolean;
}

const initialState: AppState = {
	isLoading: true,
};

export const AppReducer = (state: AppState = initialState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};