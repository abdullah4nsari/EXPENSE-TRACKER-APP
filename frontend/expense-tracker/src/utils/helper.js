export const validateEmail = (email)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
export const validatePassword = (password)=>{
    // const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    // return strongPasswordRegex.test(password);
    return password;
}