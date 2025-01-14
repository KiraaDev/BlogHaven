const bcrypt = require('bcrypt');

export const hashPassword = async (password: string): Promise<string> => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
};

export const verifyPassword = async (enteredPassword: string, storedHashedPassword: string): Promise<boolean> => {
    const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);
    return isMatch;
};