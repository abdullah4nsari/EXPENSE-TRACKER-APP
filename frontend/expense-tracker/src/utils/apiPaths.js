export const BASE_URL = "http://localhost:8000";

//utils/apiPaths.js
export const API_PATHS = {
    AUTH: {
        LOGIN: "/api/v1/auth/login",
        REGISTER: "/api/v1/auth/register",
        GET_USER_ID: "/api/v1/auth/getuser",
    },
    IMAGE: {
        UPLOAD_IMAGE:"/api/v1/auth/upload-image",
    },
    INCOME: {
        ADD_INCOME:"/api/v1/income/add",
        GET_ALL_INCOME:"/api/v1/income/get",
        DELETE_INCOME: (incomeId)=> `/api/v1/income/delete/${incomeId}`,
        DOWNLOAD_INCOME:"/api/v1/income/download",
    },
    EXPENSE: {
        ADD_EXPENSE:"/api/v1/expense/add",
        GET_ALL_EXPENSE:"/api/v1/expense/get",
        DELETE_EXPENSE: (expenseId)=> `/api/v1/expense/delete/${expenseId}`,
        DOWNLOAD_EXPENSE:"/api/v1/expense/download",
    },
    DASHBOARD: {
        GET_DATA: "/api/v1/dashboard",
    },
};