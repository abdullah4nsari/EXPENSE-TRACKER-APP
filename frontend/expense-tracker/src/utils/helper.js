import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
export const validateLoginPassword = (password) => {
  return password;
};

export const validatePassword = (password) => {
  const errors = [];

  if (!/.{8,}/.test(password)) {
    errors.push("Password must be at least 8 characters long.");
  }

  if (!/(?=.*[a-z])/.test(password)) {
    errors.push("Password must include at least one lowercase letter.");
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push("Password must include at least one uppercase letter.");
  }

  if (!/(?=.*\d)/.test(password)) {
    errors.push("Password must include at least one number.");
  }

  if (!/(?=.*[\W_])/.test(password)) {
    errors.push("Password must include at least one special character.");
  }

  if(errors.length === 0) return [];
  return errors;
}

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";
  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

const groupedDataByMonth = (data) => {
  const groupedData = {};
  data.forEach((item) => {
    const month = moment(item?.date).format("MMM YYYY");

    if (!groupedData[month]) {
      groupedData[month] = {
        month,
        amount: item?.amount || 0,
        label: item.source 
      };
    }else{
      groupedData[month].amount += item?.amount || 0;
    }
  });

  return groupedData;
};

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item) => ({
    label: item?.category,
    amount: item?.amount,
    month:moment(item?.date).format("Do MMM YYYY"),
    rawDate: new Date(item?.date)
  }));

 const sortedData = chartData.sort((a, b) => a.rawDate - b.rawDate);
  return sortedData;
};

export const prepareIncomeBarChartData = (data = []) => {
  const newData = groupedDataByMonth(data);

  // Optional: sort by date
  const sortedChartData = Object.values(newData).sort(
    (a, b) => new Date(`1 ${a.month}`) - new Date(`1 ${b.month}`)
  );

  return sortedChartData;
};
