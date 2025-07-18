export const validateEmail = (email)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
export const validatePassword = (password)=>{
    // const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    // return strongPasswordRegex.test(password);
    return password;
}

export const getInitials = (name) => {
    if(!name) return "";

    const words = name.split(" ");
    let initials = "";

    for(let i=0;i<Math.min(words.length, 2);i++){
        initials+= words[i][0];
    }

    return initials.toUpperCase();
}

export const addThousandsSeparator = (num)=>{
    if(num == null || isNaN(num)) return "";
    const [integerPart, fractionalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,",");

    return fractionalPart
        ?`${formattedInteger}.${fractionalPart}`
        : formattedInteger;
};