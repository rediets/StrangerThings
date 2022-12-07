import { useState, useEffect } from "react";

const cohort = '2211-ftb-et-web-ft';

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(
            `https://strangers-things.herokuapp.com/api/${cohort}/users/register/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password,
                    },
                }),
            }
        );
        const {
            data: { token },
        } = await response.json();
        return token;
    } catch (error) {
        console.error(error);
    }
};