import { configureStore } from '@reduxjs/toolkit';
import pulseReducer from './reducer/pulseSlicer';

export const store = configureStore({
	reducer: {
		pulseTemplate: pulseReducer
	}
});
