export const IS_CONNECTED = 'IS_CONNECTED';

/**
 *  Action for access the network information.
 */
export const checkNetwork = (isConnected) => {
    return (dispatch) => new Promise((resolve) => {
        dispatch({
            isConnected,
            type: IS_CONNECTED
        });
        resolve(isConnected);
    });
};

//Reducer for checkNetwork
const reducer = (state = {
    isConnected: false
}, action) => {
    switch (action.type) {
        case IS_CONNECTED: {
            return {
                ...state,
                isConnected: action.isConnected,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;